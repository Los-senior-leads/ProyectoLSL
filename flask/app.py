from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.sql.schema import ForeignKey, ForeignKeyConstraint
from flask_marshmallow import Marshmallow

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root@localhost/lsl'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False

db = SQLAlchemy(app)
ma = Marshmallow(app)

######### DATABASE MODELS #########

class Usuario(db.Model):
    id = db.Column(db.String(255), primary_key=True)
    nombre = db.Column(db.String(255))
    apellido = db.Column(db.String(255))
    rol = db.Column(db.String(255))

    def __init__(self, nombre, apellido, rol):
        self.nombre = nombre
        self.apellido = apellido
        self.rol = rol

class Empresa(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(255))
    fecha_creacion = db.Column(db.String(255))
    fecha_cierre = db.Column(db.String(255))
    descripcion = db.Column(db.String(255))
    funciones = db.Column(db.String(255))
    estado = db.Column(db.String(255))

    def __init__(self, nombre, fecha_creacion, fecha_cierre, descripcion, funciones, estado):
        self.nombre = nombre
        self.fecha_creacion = fecha_creacion
        self.fecha_cierre = fecha_cierre
        self.descripcion = descripcion
        self.funciones = funciones
        self.estado = estado

class Edificio(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_empresa = db.Column(db.Integer, ForeignKey('empresa.id'))
    empresa = relationship("Empresa")
    coordenadas = db.Column(db.String(255))
    nombre = db.Column(db.Integer)
    tipo = db.Column(db.String(255))
    direccion = db.Column(db.String(255))
    distrito = db.Column(db.String(255))
    estado = db.Column(db.String(255))
    cantidad_personas = db.Column(db.Integer) 

    def __init__(self, id_empresa, coordenadas, nombre, tipo, direccion, distrito, estado, cantidad_personas):
        self.nombre = nombre
        self.id_empresa = id_empresa
        self.coordenadas = coordenadas
        self.tipo = tipo
        self.direccion = direccion
        self.distrito = distrito
        self.estado = estado
        self.cantidad_personas = cantidad_personas

class Escala(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_empresa = db.Column(db.Integer, ForeignKey('empresa.id'))
    empresa = relationship("Empresa")
    categoria = db.Column(db.String(255))
    sub_categoria = db.Column(db.Integer)
    clase = db.Column(db.String(255))
    descripcion = db.Column(db.String(255))
    estado = db.Column(db.String(255))
    nivel_salarial = db.Column(db.String(255))
    nombre_puesto = db.Column(db.String(255))
    haber_basico = db.Column(db.String(255))
    numero_items = db.Column(db.Integer)
    costo_mensual = db.Column(db.Integer)
    costo_anual = db.Column(db.Integer)
    fecha_aprobacion = db.Column(db.String(255))
    fecha_cierre = db.Column(db.String(255))

    def __init__(self, id_empresa, categoria, sub_categoria, clase, descripcion, nivel_salarial,
                nombre_puesto, haber_basico, numero_items, costo_mensual, costo_anual, fecha_aprobacion, fecha_cierre):
        self.id_empresa = id_empresa
        self.categoria = categoria
        self.sub_categoria = sub_categoria
        self.clase = clase
        self.descripcion = descripcion
        self.nivel_salarial = nivel_salarial
        self.nombre_puesto = nombre_puesto
        self.haber_basico = haber_basico
        self.numero_items = numero_items
        self.costo_anual = costo_anual
        self.costo_mensual = costo_mensual
        self.fecha_aprobacion = fecha_aprobacion
        self.fecha_cierre = fecha_cierre

class CambiosEm(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_empresa = db.Column(db.Integer, ForeignKey('empresa.id'))
    empresa = relationship("Empresa")
    operacion = db.Column(db.String(255))
    fecha = db.Column(db.Integer)
    motivo = db.Column(db.String(255))
    documentacion = db.Column(db.String(255))

    def __init__(self, id_empresa, operacion, fecha, motivo, documentacion):
        self.id_empresa = id_empresa
        self.operacion = operacion
        self.fecha = fecha
        self.motivo = motivo
        self.documentacion = documentacion

class CambiosEd(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_edificio = db.Column(db.Integer, ForeignKey('edificio.id'))
    edificio = relationship("Edificio")
    operacion = db.Column(db.String(255))
    fecha = db.Column(db.Integer)
    motivo = db.Column(db.String(255))
    documentacion = db.Column(db.String(255))

    def __init__(self, id_edificio, operacion, fecha, motivo, documentacion):
        self.id_edificio = id_edificio
        self.operacion = operacion
        self.fecha = fecha
        self.motivo = motivo
        self.documentacion = documentacion


# Creates the database
db.create_all()

# Schemas
class UsuarioSchema(ma.Schema):
    class Meta:
        fields = ('id', 'nombre', 'apellido', 'rol')

user_schema = UsuarioSchema()
users_schema = UsuarioSchema(many=True)

class EmpresaSchema(ma.Schema):
    class Meta:
        fields = ('id', 'nombre', 'fecha_creacion',
        'fecha_cierre', 'descripcion', 'funciones', 'estado')

empresa_schema = EmpresaSchema()
empresas_schema = EmpresaSchema(many=True)

class EdificioSchema(ma.Schema):
    class Meta:
        fields = ('id', 'id_empresa', 'coordenada', 'nombre', 'tipo',
        'direccion', 'distrito', 'estado', 'cantidad_personas')

edificio_schema = EmpresaSchema()
edificios_schema = EmpresaSchema(many=True)

class EscalaSchema(ma.Schema):
    class Meta:
        fields = ('id', 'id_empresa', 'categoria', 'sub_categoria', 'clase',
        'descripcion', 'estado', 'nivel_salarial', 'nombre_puesto',
        'haber_basico', 'numero_items', 'costo_mensual', 'costo_anual', 
        'fecha_aprobacion', 'fecha_cierre')

escala_schema = EmpresaSchema()
escalas_schema = EmpresaSchema(many=True)

class CambioEd(ma.Schema):
    class Meta:
        fields = ('id', 'id_edificio', 'operacion', 'fecha', 'motivo', 'documentacion')

cambioEd_schema = EmpresaSchema()
cambioEds_schema = EmpresaSchema(many=True)

class CambioEm(ma.Schema):
    class Meta:
        fields = ('id', 'id_empresa', 'operacion', 'fecha', 'motivo', 'documentacion')

cambioEm_schema = EmpresaSchema()
cambioEms_schema = EmpresaSchema(many=True)

# Operations

@app.route('/empresas/crear', methods=['Post'])
def create_empresa():
    nombre = request.json['nombre']
    fecha_creacion = request.json['fecha_creacion']
    fecha_cierre = request.json['fecha_cierre']
    descripcion = request.json['descripcion']
    funciones = request.json['funciones']
    estado = request.json['estado']

    new_empresa = Empresa(nombre, fecha_creacion,
    fecha_cierre, descripcion, funciones, estado)
    
    db.session.add(new_empresa)
    db.session.commit()

    return user_schema.jsonify(new_empresa)

@app.route('/empresas', methods=['Get'])
def mostrar_empresas():
    all_empresas = Empresa.query.all()
    result = empresas_schema.dump(all_empresas)
    return jsonify(result)

@app.route('/empresas/<id>', methods=['Get'])
def mostrar_empresa(id):
    empresa = Empresa.query.get(id)
    return empresa_schema.jsonify(empresa)

@app.route('/empresas/<id>', methods=['DELETE'])
def delete_empresa(id):
  empresa = Empresa.query.get(id)
  db.session.delete(empresa)
  db.session.commit()
  return empresa_schema.jsonify(empresa)

if __name__ == "__main__":
    app.run(debug=True)