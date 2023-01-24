able File  14 lines (10 sloc)  267 Bytes

#!/usr/bin/python3

"""Define a class Square."""


class Square:
    """Represent a square."""

    def __init__(self, size):
        """Initialize a new Square.
        Args:
            size (int): The size of the new square.
        """
        self.__size = size
