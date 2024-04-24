MAIN = main
MAIN_OBJS = Solution.o main.o

all: $(MAIN)

$(MAIN): $(MAIN_OBJS)
	gcc -Wall $^ -o $@

%.o: %.c
	gcc -Wall -c $<

clean:
	rm -f *.o $(MAIN)