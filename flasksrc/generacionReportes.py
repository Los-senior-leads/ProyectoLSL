import matplotlib.pyplot as plt
import numpy as np
import contador as cn

###Funciones de creacion de graficos para reportes###

#Grafica las fechas de creacion de las distintas empresas
def graficoFechasDeCreacion(fechas):
    years = cn.separadorYears(fechas)
    contadorEmpresas = cn.contarElementosRepetidos(years)
    uniqueYear = list(set(years))
    uniqueYear.sort()
    plt.plot(uniqueYear,contadorEmpresas,marker='o',linestyle='--',color='g')
    
    plt.xlabel("Años")
    plt.ylabel("Número de empresas")
    plt.title("Número de empresas creadas a travez de los años")

    plt.savefig("../src/assets/graficoEmpresasFechasDeCreacion.png")
    plt.close()



#Grafica las fechas de creacion de las distintas empresas
def graficoFechasDeCierre(fechas):

    years = cn.separadorYears(fechas)
    contadorEmpresas = cn.contarElementosRepetidos(years)
    uniqueYear = list(set(years))
    uniqueYear.sort()
    plt.plot(uniqueYear,contadorEmpresas,marker='o',linestyle='--',color='r')
    
    plt.xlabel("Años")
    plt.ylabel("Número de empresas")
    plt.title("Número de empresas cerradas a travez de los años")

    plt.savefig("../src/assets/graficoEmpresasFechasDeCierre.png")
    plt.close()
    #plt.show()

#Grafica de pie de los estados de las empresas
def graficoEstado(estados):
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
    plt.close()
    


#Grafica de pie de tipos de una empresa
def graficoTipoEdificio(tipos):
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
    plt.close()

#histograma de distritos de edificios
def graficoDistritoEdificio(distritos):
    distritos.sort()
    distritolabels = list(set(distritos))
    distritolabels.sort()
    contadorDistritos = cn.contarElementosRepetidos(distritos)
    plt.bar(distritolabels,contadorDistritos,color=['red','green','blue'])
    plt.title("Distribucion de distritos de edificios")
    plt.savefig("../src/assets/graficoEdificioDistrito.png")
    plt.close()

#Grafico de tipo Scatter de aprobacion de escala
def graficoFechasDeAprobacionEscala(fechas):
    years = cn.separadorYears(fechas)
    contadorEscalas = cn.contarElementosRepetidos(years)
    uniqueYear = list(set(years))
    uniqueYear.sort()

    plt.scatter(uniqueYear,contadorEscalas)
    
    plt.xlabel("Años")
    plt.ylabel("Número de escalas")
    plt.title("Número de escalas salariales creadas a travez de los años")

    plt.savefig("../src/assets/graficoEscalaFechasDeAprobacion.png")
    plt.close()

#Grafico de fechas de cierre de escala salarial
def graficoFechasDeCierreEscala(fechas):
    years = cn.separadorYears(fechas)
    contadorEscalas = cn.contarElementosRepetidos(years)
    uniqueYear = list(set(years))
    uniqueYear.sort()

    print(uniqueYear)
    print(contadorEscalas)

    plt.scatter(uniqueYear,contadorEscalas,color='red')
    
    plt.xlabel("Años")
    plt.ylabel("Número de escalas")
    plt.title("Número de escalas salariales cerradas a travez de los años")

    plt.savefig("../src/assets/graficoEscalaFechasDeCierre.png")    
    plt.close()