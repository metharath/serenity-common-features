﻿using Serenity.Data;
using Serenity.Reporting;
using Serenity.Services;
using Serenity.Web;
using System;
using System.Data;
using Microsoft.AspNetCore.Mvc;
using MyRepository = Serenity.Demo.Northwind.Repositories.OrderRepository;
using MyRow = Serenity.Demo.Northwind.Entities.OrderRow;
using System.Globalization;

namespace Serenity.Demo.Northwind.Endpoints
{
    [Route("Services/Serenity.Demo.Northwind/Order/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class OrderController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository(Context).Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository(Context).Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository(Context).Delete(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository(Context).Retrieve(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, OrderListRequest request)
        {
            return new MyRepository(Context).List(connection, request);
        }

        public FileContentResult ListExcel(IDbConnection connection, OrderListRequest request,
            [FromServices] IExcelExporter exporter)
        {
            var data = List(connection, request).Entities;
            var bytes = exporter.Export(data, typeof(Columns.OrderColumns), request.ExportColumns);
            return ExcelContentResult.Create(bytes, "OrderList_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss", CultureInfo.InvariantCulture) + ".xlsx");
        }
    }
}
