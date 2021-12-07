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
    id = db.Column(db.String(255), primary_key=True)
    nombre = db.Column(db.String(255))
    indice_jerarquico = db.Column(db.Integer)
    fecha_creacion = db.Column(db.String(255))
    fecha_cierre = db.Column(db.String(255))
    descripcion = db.Column(db.String(255))
    funciones = db.Column(db.String(255))
    estado = db.Column(db.String(255))
    empresa_superior = db.Column(db.String(255), ForeignKey('empresa.id'))
    empresa = relationship("Empresa")

class Edificio(db.Model):
    id = db.Column(db.String(255), primary_key=True)
    id_empresa = db.Column(db.String(255), ForeignKey('empresa.id'))
    empresa = relationship("Empresa")
    coordenadas = db.Column(db.String(255))
    nombre = db.Column(db.Integer)
    tipo = db.Column(db.String(255))
    direccion = db.Column(db.String(255))
    distrito = db.Column(db.String(255))
    estado = db.Column(db.String(255))
    cantidad_personas = db.Column(db.Integer) 

class Escala(db.Model):
    id = db.Column(db.String(255), primary_key=True)
    id_empresa = db.Column(db.String(255), ForeignKey('empresa.id'))
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

class CambiosEm(db.Model):
    id = db.Column(db.String(255), primary_key=True)
    id_empresa = db.Column(db.String(255), ForeignKey('empresa.id'))
    empresa = relationship("Empresa")
    operacion = db.Column(db.String(255))
    fecha = db.Column(db.Integer)
    motivo = db.Column(db.String(255))
    documentacion = db.Column(db.String(255))

class CambiosEd(db.Model):
    id = db.Column(db.String(255), primary_key=True)
    id_edificio = db.Column(db.String(255), ForeignKey('edificio.id'))
    empresa = relationship("Empresa")
    operacion = db.Column(db.String(255))
    fecha = db.Column(db.Integer)
    motivo = db.Column(db.String(255))
    documentacion = db.Column(db.String(255))


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
        fields = ('id', 'nombre', 'indice_jerarquico', 'fecha_creacion',
        'fecha_cierre', 'descripcion', 'funciones', 'estado', 'empresa_superior')

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

@app.route('/users', methods=['Post'])
def create_user():
    nombre = request.json['nombre']
    apellido = request.json['apellido']
    rol = request.json['rol']

    new_user = Usuario(nombre, apellido, rol)
    
    db.session.add(new_user)
    db.session.commit()

    return user_schema.jsonify(new_user)


if __name__ == "__main__":
    app.run(debug=True)