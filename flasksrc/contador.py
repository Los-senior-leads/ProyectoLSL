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