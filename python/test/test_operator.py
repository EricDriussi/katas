from src import operator


class Test:

    def test_sum(self):
        result = operator.sum(2, 3)
        assert result == 5
