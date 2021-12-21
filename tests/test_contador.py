from flasksrc.contador import contarElementosRepetidos, separadorYears

import pytest

@pytest.mark.parametrize('lista,result,',[
    ([1],[1]),
    ([3,3,3,2,2,1],[3,2,1]),
    ([1,2,2,3,3,3],[1,2,3]),
    ([1,2,3,4,5,6,7,8,9,10],[1,1,1,1,1,1,1,1,1,1]),
    (["Esto","es","una","Prueba"],[1,1,1,1]),
    (["a","b","z","z","z"],[1,1,3])
])
def test_contarElementosRepetidos(lista,result):
    assert contarElementosRepetidos(lista) == result


@pytest.mark.parametrize('lista,result',[
    (["12/12/2012"],[2012]),
    (["1/1/2001","1/2/2000"],[2000,2001]),
    (["3/3/2004","8/8/1999","12/12/1980"],[1980,1999,2004]),
    (["3/3/1","8/8/2","12/12/3"],[1,2,3]),
    (["3/3/5000","8/8/2","12/12/2000"],[2,2000,5000]),
])
def test_separadorYears(lista,result):
    assert separadorYears(lista) == result