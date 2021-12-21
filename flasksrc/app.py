from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.sql.schema import ForeignKey, ForeignKeyConstraint
from flask_marshmallow import Marshmallow
from flask_restx import Api, Resource, fields, marshal_with

from passlib.apps import custom_app_context as pwd_context
from fastapi_jwt_auth import AuthJWT
from pydantic import BaseModel
from fastapi_jwt_auth.exceptions import AuthJWTException
from fastapi import FastAPI, HTTPException, Depends, Request
from fastapi.responses import JSONResponse

from matplotlib import colors
import generacionReportes as gr


app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root@localhost/lsl'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False

db = SQLAlchemy(app)
ma = Marshmallow(app)

######### DATABASE MODELS #########

class Usuario(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    nombre = db.Column(db.String(30), unique=True)
    contrasena  = db.Column(db.String(30))
    rol = db.Column(db.String(20))

    def __init__(self, nombre, contrasena , rol):
        self.nombre = nombre
        self.contrasena  = pwd_context.encrypt(contrasena)
        self.rol = rol

    # def hash_password(self, password_hash):
    #     self.password_hash = pwd_context.encrypt(password_hash)

    # def verify_password(self, password_hash):
    #     return pwd_context.verify(password_hash, self.password_hash)


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
        fields = ('id', 'nombre', 'contrasena', 'rol')

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
        fields = ('id', 'id_empresa', 'coordenadas', 'nombre', 'tipo',
        'direccion', 'distrito', 'estado', 'cantidad_personas')

edificio_schema = EdificioSchema()
edificios_schema = EdificioSchema(many=True)

class EscalaSchema(ma.Schema):
    class Meta:
        fields = ('id', 'id_empresa', 'categoria', 'sub_categoria', 'clase',
        'descripcion', 'estado', 'nivel_salarial', 'nombre_puesto',
        'haber_basico', 'numero_items', 'costo_mensual', 'costo_anual', 
        'fecha_aprobacion', 'fecha_cierre')

escala_schema = EscalaSchema()
escalas_schema = EscalaSchema(many=True)

class CambioEd(ma.Schema):
    class Meta:
        fields = ('id', 'id_edificio', 'operacion', 'fecha', 'motivo', 'documentacion')

cambioEd_schema = CambioEd()
cambioEds_schema = CambioEd(many=True)

class CambioEm(ma.Schema):
    class Meta:
        fields = ('id', 'id_empresa', 'operacion', 'fecha', 'motivo', 'documentacion')

cambioEm_schema = CambioEm()
cambioEms_schema = CambioEm(many=True)


resource_fields_usuarios = api.model("Usuario", {
    'id': fields.Integer,
    'nombre': fields.String,
    'contrasena': fields.String,
    'rol' : fields.String
})


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
class Settings(BaseModel):
    authjwt_secret_key: str = "secret"

# @AuthJWT.load_config
# def get_config():
#     return Settings()

# @app.exception_handler(AuthJWTException)
# def authjwt_exception_handler(request: Request, exc: AuthJWTException):
#     return JSONResponse(
#         status_code=exc.status_code,
#         content={"detail": exc.message}
#     )

@api.route('/login')
class Usuarios(Resource):
    def get(self):
        all_usuarios = Usuario.query.all()
        result = users_schema.dump(all_usuarios)
        print(result)
        return jsonify(result)

    # def login(user: Usuario, Authorize: AuthJWT = Depends()):
    #     if user.username != "test" or user.password != "test":
    #         raise HTTPException(status_code=401, detail="Bad username or password")
    #     access_token = Authorize.create_access_token(subject=user.username)
    #     return {"access_token": access_token}

@api.route('/usuarios')
class Usuarios(Resource):
    def get(self):
        all_usuarios = Usuario.query.all()
        result = users_schema.dump(all_usuarios)
        print(result)
        return jsonify(result)

    @api.marshal_with(resource_fields_usuarios)
    def post(self):
        nombre = request.json['nombre']
        contrasena = request.json['contrasena']
        rol = request.json['rol']

        new_user = Usuario(nombre, contrasena, rol)
        
        db.session.add(new_user)
        db.session.commit()

        return new_user

@api.route('/usuarios/<int:usuario_id>')
class Usuarios(Resource):

    @api.marshal_with(resource_fields_usuarios)
    def get(self, usuario_id):
        usuario = Usuario.query.get(usuario_id)
        return usuario

    @api.marshal_with(resource_fields_usuarios)
    def put(self, usuario_id):
        usuario = Usuario.query.get(usuario_id)
        usuario.nombre = request.json['nombre']
        usuario.contrasena = request.json['contrasena']
        usuario.rol = request.json['rol']

        db.session.commit()
        return usuario

    @api.marshal_with(resource_fields_usuarios)
    def delete(self, usuario_id):
        usuario = Usuario.query.get(usuario_id)
        db.session.delete(usuario)
        db.session.commit()
        return usuario



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
        
        gr.graficoFechasDeCreacion(fechasCreacionEmpresas)
        gr.graficoFechasDeCierre(fechasCierreEmpresas)
        gr.graficoEstado(estadoEmpresas)
        
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
        
        gr.graficoDistritoEdificio(distrititosEdificios)
        gr.graficoTipoEdificio(tiposEdificios)

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
        
        gr.graficoFechasDeAprobacionEscala(fechaCreacionEscala)
        gr.graficoFechasDeCierreEscala(fechaCierreEscala)

        return jsonify(result)



# api.add_resource(Empresas, "/empresas/<int:video_id>")

if __name__ == "__main__":
    app.run(debug=True)