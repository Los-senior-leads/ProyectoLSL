create table if not exists usuarios (
  codigo varchar(255),
  nombre varchar(255),
  apellido varchar(255),
  rol varchar(255),
  primary key(codigo)
); 

create table if not exists empresa (
  codigo varchar(255),
  nombre varchar(255),
  indice_jerarquico int,
  fecha_creacion varchar(255),
  fecha_cierre varchar(255),
  descripcion varchar(255),
  funciones varchar(255),
  estado varchar(255),
  empresa_superior varchar(255),
  primary key(codigo),
  foreign key (empresa_superior) references empresa(codigo)
);

-- create table edificio (
--   codigo varchar(255),
--   codigo_empresa varchar(255),
--   coordenadas varchar(255),
--   nombre varchar(255),
--   tipo varchar(255),
--   direccion varchar(255),
--   distrito varchar(255),
--   estado varchar(255),
--   cantidad_personas int,
--   primary key(codigo),
--   foreign key (codigo_empresa)
--     references empresa (codigo);
-- );

-- create table escalaSalarial (
--   codigo varchar(255),
--   codigo_empresa varchar(255),
--   categoria varchar(255),
--   sub_categoria varchar(255),
--   clase varchar(255),
--   descripcion varchar(255),
--   estado varchar(255),
--   nivel_salarial varchar(255),
--   nombre_puesto varchar(255),
--   haber_basico varchar(255),
--   numero_items int,
--   costo_mensual int,
--   costo_anual int,
--   fecha_aprobacion varchar(255),
--   fecha_cierre varchar(255),
--   primary key(codigo),
--   foreign key (codigo_empresa)
--     references empresa (codigo);
-- );

-- create table cambiosEmpresa (
--   codigo varchar(255),
--   codigo_empresa varchar(255),
--   operacion varchar(255),
--   fecha varchar(255),
--   motivo varchar(255),
--   documentacion varchar(255),
--   primary key(codigo),
--   foreign key (codigo_empresa)
--     references empresa (codigo);
-- );

-- create table cambiosEdificio (
--   codigo varchar(255),
--   codigo_edificio varchar(255),
--   operacion varchar(255),
--   fecha varchar(255),
--   motivo varchar(255),
--   documentacion varchar(255),
--   primary key(codigo),
--   foreign key (codigo_edificio) 
--     references edificio (codigo);
-- );