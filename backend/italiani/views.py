from rest_framework import viewsets
from .models import ItalianiCH
from .serializers import ItalianiChSerializer
#from rest_framework.permissions import IsAdminUser


# 
# /italianich/?cap=8952
class ItalianiChAPIView(viewsets.ModelViewSet): 
    queryset = ItalianiCH.objects.all()
    #username = self.request.query_params.get('username')
    
    serializer_class = ItalianiChSerializer
    #permission_classes = (IsAdminUser,)
    def get_queryset(self):
        query_set = self.queryset
        cap_param = self.request.query_params.get('cap')
        print(cap_param)
        if cap_param:
            query_set = query_set.filter(cap=cap_param)
        
        
        return query_set