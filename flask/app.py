from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.sql.schema import ForeignKey, ForeignKeyConstraint
from flask_marshmallow import Marshmallow
from flask_restx import Api, Resource, fields, marshal_with
from matplotlib import colors
import matplotlib.pyplot as plt
import numpy as np

app = Flask(__name__)
api = Api(app)
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

class EmpresaModel(db.Model):
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

class EdificioModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_empresa = db.Column(db.Integer, ForeignKey('empresa_model.id'))
    empresa = relationship("EmpresaModel")
    coordenadas = db.Column(db.String(255))
    nombre = db.Column(db.String(255))
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

class EscalaModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_empresa = db.Column(db.Integer, ForeignKey('empresa_model.id'))
    empresa = relationship("EmpresaModel")
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

    def __init__(self, id_empresa, categoria, sub_categoria, clase, descripcion, estado, nivel_salarial,
                nombre_puesto, haber_basico, numero_items, costo_mensual, costo_anual, fecha_aprobacion, fecha_cierre):
        self.id_empresa = id_empresa
        self.categoria = categoria
        self.sub_categoria = sub_categoria
        self.clase = clase
        self.descripcion = descripcion
        self.estado = estado
        self.nivel_salarial = nivel_salarial
        self.nombre_puesto = nombre_puesto
        self.haber_basico = haber_basico
        self.numero_items = numero_items
        self.costo_anual = costo_anual
        self.costo_mensual = costo_mensual
        self.fecha_aprobacion = fecha_aprobacion
        self.fecha_cierre = fecha_cierre

class CambiosEmModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_empresa = db.Column(db.Integer, ForeignKey('empresa_model.id'))
    empresa = relationship("EmpresaModel")
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

class CambiosEdModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_edificio = db.Column(db.Integer, ForeignKey('edificio_model.id'))
    edificio = relationship("EdificioModel")
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

resource_fields_empresa = api.model("Empresa", {
    'id': fields.Integer,
    'nombre': fields.String,
    'fecha_creacion': fields.String,
    'fecha_cierre': fields.String,
    'descripcion': fields.String,
    'funciones': fields.String,
    'estado': fields.String
})

resource_fields_edificio = api.model("Edificio", {
    'id' : fields.Integer,
    'id_empresa' : fields.Integer,
    'coordenadas' : fields.String,
    'nombre' : fields.String,
    'tipo' : fields.String,
    'direccion' : fields.String,
    'distrito' : fields.String,
    'estado' : fields.String,
    'cantidad_personas' : fields.Integer
})

resource_fields_escala = api.model("Escala", {
    'id' : fields.Integer,
    'id_empresa' : fields.Integer,
    'categoria' : fields.String,
    'sub_categoria' : fields.Integer,
    'clase' : fields.String,
    'descripcion' : fields.String,
    'estado' : fields.String,
    'nivel_salarial' : fields.String,
    'nombre_puesto' : fields.String,
    'haber_basico' : fields.String,
    'numero_items' : fields.Integer,
    'costo_mensual' : fields.Integer,
    'costo_anual' : fields.Integer,
    'fecha_aprobacion' : fields.String,
    'fecha_cierre' : fields.String
})

# Operations

@api.route('/empresas')
class Empresas(Resource):
    def get(self):
        all_empresas = EmpresaModel.query.all()
        result = empresas_schema.dump(all_empresas)
        return jsonify(result)

    @api.marshal_with(resource_fields_empresa)
    def post(self):
        nombre = request.json['nombre']
        fecha_creacion = request.json['fecha_creacion']
        fecha_cierre = request.json['fecha_cierre']
        descripcion = request.json['descripcion']
        funciones = request.json['funciones']
        estado = request.json['estado']

        new_empresa = EmpresaModel(nombre, fecha_creacion,
        fecha_cierre, descripcion, funciones, estado)
        
        db.session.add(new_empresa)
        db.session.commit()

        return new_empresa

@api.route('/empresas/<int:empresa_id>')
class Empresas(Resource):
    @api.marshal_with(resource_fields_empresa)
    def get(self, empresa_id):
        empresa = EmpresaModel.query.get(empresa_id)
        return empresa

    @api.marshal_with(resource_fields_empresa)
    def delete(self, empresa_id):
        empresa = EmpresaModel.query.get(empresa_id)
        db.session.delete(empresa)
        db.session.commit()
        return empresa

    @api.marshal_with(resource_fields_empresa)
    def put(self, empresa_id):
        empresa = EmpresaModel.query.get(empresa_id)
        empresa.nombre = request.json['nombre']
        empresa.fecha_creacion = request.json['fecha_creacion']
        empresa.fecha_cierre = request.json['fecha_cierre']
        empresa.descripcion = request.json['descripcion']
        empresa.funciones = request.json['funciones']
        empresa.estado = request.json['estado']

        db.session.commit()
        return empresa

@api.route('/reporteEmpresas')
class Empresas(Resource):
    def get(self):
        all_empresas = EmpresaModel.query.all()
        result = empresas_schema.dump(all_empresas)

        fechasCreacionEmpresas =[]
        fechasCierreEmpresas = []
        estadoEmpresas=[]

        for emp in all_empresas:
            fechasCreacionEmpresas.append(emp.fecha_creacion)
            fechasCierreEmpresas.append(emp.fecha_cierre)
            estadoEmpresas.append(emp.estado)
        
        graficoFechasDeCreacion(fechasCierreEmpresas)
        graficoFechasDeCierre(fechasCierreEmpresas)
        graficoEstado(estadoEmpresas)
        

        return jsonify(result)


@api.route('/edificios')
class Edificios(Resource):
    def get(self):
        all_edificios = EdificioModel.query.all()
        result = edificios_schema.dump(all_edificios)
        return jsonify(result)

    @api.marshal_with(resource_fields_edificio)
    def post(self):
        id_empresa = request.json['id_empresa']
        coordenadas = request.json['coordenadas']
        nombre = request.json['nombre']
        tipo = request.json['tipo']
        direccion = request.json['direccion']
        distrito = request.json['distrito']
        estado = request.json['estado']
        cantidad_personas = request.json['cantidad_personas']

        new_edificio = EdificioModel(id_empresa, coordenadas, nombre, tipo
        , direccion, distrito, estado, cantidad_personas)
        
        db.session.add(new_edificio)
        db.session.commit()

        return new_edificio

@api.route('/edificios/<int:edificio_id>')
class Edificios(Resource):
    @api.marshal_with(resource_fields_edificio)
    def get(self, edificio_id):
        edificio = EdificioModel.query.get(edificio_id)
        return edificio

    @api.marshal_with(resource_fields_edificio)
    def delete(self, edificio_id):
        edificio = EdificioModel.query.get(edificio_id)
        db.session.delete(edificio)
        db.session.commit()
        return edificio

    @api.marshal_with(resource_fields_edificio)
    def put(self, edificio_id):
        edificio = EdificioModel.query.get(edificio_id)
        edificio.id_empresa = request.json['id_empresa']
        edificio.coordenadas = request.json['coordenadas']
        edificio.nombre = request.json['nombre']
        edificio.tipo = request.json['tipo']
        edificio.direccion = request.json['direccion']
        edificio.distrito = request.json['distrito']
        edificio.estado = request.json['estado']
        edificio.cantidad_personas = request.json['cantidad_personas']

        db.session.commit()
        return edificio

@api.route('/reporteEdificios')
class Edificios(Resource):
    def get(self):
        all_edificios = EdificioModel.query.all()
        result = edificio_schema.dump(all_edificios)

        distrititosEdificios =[]
        tiposEdificios = []

        for edif in all_edificios:
            distrititosEdificios.append(edif.distrito)
            tiposEdificios.append(edif.tipo)
        
        graficoDistritoEdificio(distrititosEdificios)
        graficoTipoEdificio(tiposEdificios)

        return jsonify(result)

@api.route('/escalas')
class Escalas(Resource):
    def get(self):
        all_escalas = EscalaModel.query.all()
        result = escalas_schema.dump(all_escalas)
        return jsonify(result)

    @api.marshal_with(resource_fields_escala)
    def post(self):
        new_escala =  EscalaModel(
            request.json['id_empresa'],
            request.json['categoria'],
            request.json['sub_categoria'],
            request.json['clase'],
            request.json['descripcion'],
            request.json['estado'],
            request.json['nivel_salarial'],
            request.json['nombre_puesto'],
            request.json['haber_basico'],
            request.json['numero_items'],
            request.json['costo_mensual'],
            request.json['costo_anual'],
            request.json['fecha_aprobacion'],
            request.json['fecha_cierre']
        )
        db.session.add(new_escala)
        db.session.commit()

        return new_escala

@api.route('/escalas/<int:escala_id>')
class Escalas(Resource):
    @api.marshal_with(resource_fields_escala)
    def get(self, escala_id):
        escala = EscalaModel.query.get(escala_id)
        return escala

    @api.marshal_with(resource_fields_escala)
    def delete(self, escala_id):
        escala = EscalaModel.query.get(escala_id)
        db.session.delete(escala)
        db.session.commit()
        return escala

    @api.marshal_with(resource_fields_escala)
    def put(self, escala_id):
        escala = EscalaModel.query.get(escala_id)
        escala.id_empresa = request.json['id_empresa']
        escala.categoria = request.json['categoria']
        escala.sub_categoria = request.json['sub_categoria']
        escala.clase = request.json['clase']
        escala.descripcion = request.json['descripcion']
        escala.estado = request.json['estado']
        escala.nivel_salarial = request.json['nivel_salarial']
        escala.nombre_puesto = request.json['nombre_puesto']
        escala.haber_basico = request.json['haber_basico']
        escala.numero_items = request.json['numero_items']
        escala.costo_mensual = request.json['costo_mensual']
        escala.costo_anual= request.json['costo_anual']
        escala.fecha_aprobacion = request.json['fecha_aprobacion']
        escala.fecha_cierre = request.json['fecha_cierre']
        db.session.commit()
        return escala

@api.route('/reporteSalarial')
class Escala(Resource):
    def get(self):
        all_escalas = EscalaModel.query.all()
        result = escalas_schema.dump(all_escalas)

        fechaCreacionEscala =[]
        fechaCierreEscala = []

        for esca in all_escalas:
            fechaCreacionEscala.append(esca.fecha_aprobacion)
            fechaCierreEscala.append(esca.fecha_cierre)
        
        graficoFechasDeAprobacionEscala(fechaCreacionEscala)
        graficoFechasDeCierreEscala(fechaCierreEscala)

        return jsonify(result)


# api.add_resource(Empresas, "/empresas/<int:video_id>")

###Funciones de creacion de graficos para reportes

#Grafica las fechas de creacion de las distintas empresas
def graficoFechasDeCreacion(fechas):
    plt.clf()
    years = []
    for fecha in fechas:
        years.append(int(fecha.split(sep="/")[2]))
    years.sort()
    contadorEmpresas = contarElementosRepetidos(years)
    uniqueYear = list(set(years))
    uniqueYear.sort()
    plt.plot(uniqueYear,contadorEmpresas,marker='o',linestyle='--',color='g')
    
    plt.xlabel("Años")
    plt.ylabel("Número de empresas")
    plt.title("Número de empresas creadas a travez de los años")

    plt.savefig("../src/assets/graficoEmpresasFechasDeCreacion.png")
    

#Cuenta los elementos únicos de un array de elementos dado
def contarElementosRepetidos(elementos):
    if len(elementos)==0:
        return []
    contador=[]
    i = -1
    elemI = 0
    for elem in elementos:
        if elemI != elem:
            contador.append(1)
            elemI = elem
            i=i+1
        else:
            contador[i]=contador[i]+1
    return contador

#Grafica las fechas de creacion de las distintas empresas
def graficoFechasDeCierre(fechas):
    plt.clf()
    years = []
    for fecha in fechas:
        if len(fecha)>0 :
            years.append(int(fecha.split(sep="/")[2]))
    years.sort()
    contadorEmpresas = contarElementosRepetidos(years)
    uniqueYear = list(set(years))
    uniqueYear.sort()
    plt.plot(uniqueYear,contadorEmpresas,marker='o',linestyle='--',color='r')
    
    plt.xlabel("Años")
    plt.ylabel("Número de empresas")
    plt.title("Número de empresas cerradas a travez de los años")

    plt.savefig("../src/assets/graficoEmpresasFechasDeCierre.png")
    #plt.show()

#Grafica de pie de los estados de las empresas
def graficoEstado(estados):
    plt.clf()
    estadosLabels = ["Alta","Baja"]
    contador =[0,0]
    for estado in estados:
        if estado.lower() == "alta":
            contador[0]=contador[0]+1
        elif estado.lower() == "baja":
            contador[1]=contador[1]+1
    plt.pie(contador,labels=estadosLabels)
    plt.title("Estados de empresas registradas")
    plt.savefig("../src/assets/graficoEmpresasEstado.png")


#Grafica de pie de tipos de una empresa
def graficoTipoEdificio(tipos):
    plt.clf()
    tiposLabels = ["Propio","Alquilado","Externo"]
    contador =[0,0,0]
    for tipo in tipos:
        if tipo.lower() == "propio":
            contador[0]=contador[0]+1
        elif tipo.lower() == "alquilado":
            contador[1]=contador[1]+1
        elif tipo.lower() == "externo":
            contador[2]=contador[2]+1
    plt.pie(contador,labels=tiposLabels)
    plt.title("Tipos de edificios")
    plt.savefig("../src/assets/graficoEdificioTipo.png")

#histograma de distritos de edificios
def graficoDistritoEdificio(distritos):
    plt.clf()
    distritos.sort()
    distritolabels = list(set(distritos))
    distritolabels.sort()
    contadorDistritos = contarElementosRepetidos(distritos)
    plt.bar(distritolabels,contadorDistritos,color=['red','green','blue'])
    plt.title("Distribucion de distritos de edificios")
    plt.savefig("../src/assets/graficoEdificioDistrito.png")

#Grafico de tipo Scatter de aprobacion de escala
def graficoFechasDeAprobacionEscala(fechas):
    plt.clf()
    years = []
    for fecha in fechas:
        years.append(int(fecha.split(sep="/")[2]))
    years.sort()
    contadorEscalas = contarElementosRepetidos(years)
    uniqueYear = list(set(years))
    uniqueYear.sort()

    plt.scatter(uniqueYear,contadorEscalas)
    
    plt.xlabel("Años")
    plt.ylabel("Número de escalas")
    plt.title("Número de escalas salariales creadas a travez de los años")

    plt.savefig("../src/assets/graficoEscalaFechasDeAprobacion.png")


#Grafico de fechas de cierre de escala salarial
def graficoFechasDeCierreEscala(fechas):
    plt.clf()
    years = []
    for fecha in fechas:
        years.append(int(fecha.split(sep="/")[2]))
    years.sort()
    contadorEscalas = contarElementosRepetidos(years)
    uniqueYear = list(set(years))
    uniqueYear.sort()

    print(uniqueYear)
    print(contadorEscalas)

    plt.scatter(uniqueYear,contadorEscalas,color='red')
    
    plt.xlabel("Años")
    plt.ylabel("Número de escalas")
    plt.title("Número de escalas salariales cerradas a travez de los años")

    plt.savefig("../src/assets/graficoEscalaFechasDeCierre.png")    

if __name__ == "__main__":
    app.run(debug=True)