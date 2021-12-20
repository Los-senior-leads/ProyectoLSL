import sys
sys.path.insert(0, 'flask')
from app import contarElementosRepetidos

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
