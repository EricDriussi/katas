from unittest import TestCase

from src import operator


class Test(TestCase):

	def test_sum(self):
		result = operator.sum(2, 3)
		assert result == 5