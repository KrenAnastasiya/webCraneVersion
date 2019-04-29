import xlrd, xlwt
#открываем файл
rb = xlrd.open_workbook('/home/data-scientist/Desktop/server/config/TRMZ_2x2_Alarms.xlsxTRMZ_2x2_Alarms.xlsx',formatting_info=True)

#выбираем активный лист
sheet = rb.sheet_by_index(0)