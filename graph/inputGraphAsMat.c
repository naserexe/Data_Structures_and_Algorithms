// C program for the above approach
#include <stdio.h>

void main()
{
  int adj[50][50];
  int node, edge;
  printf("Enter number of node: ");
  scanf("%d", &node);

  printf("Enter number of edge: ");
  scanf("%d", &edge);

  int n1, n2;
  for(int i = 0; i<edge; i++){
    scanf("%d %d", &n1, &n2);
    adj[n1][n2] = 1;
    adj[n2][n1] = 1;
  }

  for(int i=0;i<node;i++){
    printf("\n");
    for(int j=0;j<node;j++){
      printf("%d\t", adj[i][j]);
    }
  }
}
