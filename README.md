
# 过滤并计算行数
Sub Filter_MoreCriteria()

    Dim Crit As Variant
    Dim x As Range, i As Integer
    Dim RdCnt As Long
    Dim RdCnts As Long
    
    Application.ScreenUpdating = False
    With Worksheets("sheet1")
        If .FilterMode = True Then .ShowAllData
        .Range("A1").AutoFilter Field:=2, Criteria1:="女"
        .Range("A1").AutoFilter Field:=3, _
            Criteria1:=">=22", Operator:=xlAnd, Criteria2:="<=26"
    
    For Each rngCell In [a1].CurrentRegion.SpecialCells(xlCellTypeVisible).Areas
        RdCnt = RdCnt + rngCell.Rows.Count
        
    Next rngCell
    
    'Clear
    .ShowAllData
    End With
    
    
    Set x = Nothing
    MsgBox "Count: " & RdCnt - 1
 
    'Clear
    'Selection.AutoFilter
    
    Application.ScreenUpdating = True
    
End Sub

