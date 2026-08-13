[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrderItemsSearchRequest

# Class: SalesOrderItemsSearchRequest

Request payload structure used to search and filter Sales Order Item records.
Supports pagination controls, tenancy isolation, status grouping, and text-based matching.

**`Generated`**

from message Scailo.SalesOrderItemsSearchRequest

## Hierarchy

- `Message`\<[`SalesOrderItemsSearchRequest`](SalesOrderItemsSearchRequest.md)\>

  ↳ **`SalesOrderItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](SalesOrderItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](SalesOrderItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](SalesOrderItemsSearchRequest.md#approvedonend)
- [approvedOnStart](SalesOrderItemsSearchRequest.md#approvedonstart)
- [approverRoleId](SalesOrderItemsSearchRequest.md#approverroleid)
- [bundledWithId](SalesOrderItemsSearchRequest.md#bundledwithid)
- [clientFamilyCode](SalesOrderItemsSearchRequest.md#clientfamilycode)
- [clientUomId](SalesOrderItemsSearchRequest.md#clientuomid)
- [count](SalesOrderItemsSearchRequest.md#count)
- [deliveryDateEnd](SalesOrderItemsSearchRequest.md#deliverydateend)
- [deliveryDateExact](SalesOrderItemsSearchRequest.md#deliverydateexact)
- [deliveryDateStart](SalesOrderItemsSearchRequest.md#deliverydatestart)
- [entityUuid](SalesOrderItemsSearchRequest.md#entityuuid)
- [familyId](SalesOrderItemsSearchRequest.md#familyid)
- [isActive](SalesOrderItemsSearchRequest.md#isactive)
- [offset](SalesOrderItemsSearchRequest.md#offset)
- [salesOrderId](SalesOrderItemsSearchRequest.md#salesorderid)
- [searchKey](SalesOrderItemsSearchRequest.md#searchkey)
- [sortKey](SalesOrderItemsSearchRequest.md#sortkey)
- [sortOrder](SalesOrderItemsSearchRequest.md#sortorder)
- [status](SalesOrderItemsSearchRequest.md#status)
- [taxGroupId](SalesOrderItemsSearchRequest.md#taxgroupid)
- [fields](SalesOrderItemsSearchRequest.md#fields)
- [runtime](SalesOrderItemsSearchRequest.md#runtime)
- [typeName](SalesOrderItemsSearchRequest.md#typename)

### Methods

- [clone](SalesOrderItemsSearchRequest.md#clone)
- [equals](SalesOrderItemsSearchRequest.md#equals)
- [fromBinary](SalesOrderItemsSearchRequest.md#frombinary)
- [fromJson](SalesOrderItemsSearchRequest.md#fromjson)
- [fromJsonString](SalesOrderItemsSearchRequest.md#fromjsonstring)
- [getType](SalesOrderItemsSearchRequest.md#gettype)
- [toBinary](SalesOrderItemsSearchRequest.md#tobinary)
- [toJSON](SalesOrderItemsSearchRequest.md#tojson)
- [toJson](SalesOrderItemsSearchRequest.md#tojson-1)
- [toJsonString](SalesOrderItemsSearchRequest.md#tojsonstring)
- [equals](SalesOrderItemsSearchRequest.md#equals-1)
- [fromBinary](SalesOrderItemsSearchRequest.md#frombinary-1)
- [fromJson](SalesOrderItemsSearchRequest.md#fromjson-1)
- [fromJsonString](SalesOrderItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesOrderItemsSearchRequest**(`data?`): [`SalesOrderItemsSearchRequest`](SalesOrderItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesOrderItemsSearchRequest`](SalesOrderItemsSearchRequest.md)\> |

#### Returns

[`SalesOrderItemsSearchRequest`](SalesOrderItemsSearchRequest.md)

#### Overrides

Message\&lt;SalesOrderItemsSearchRequest\&gt;.constructor

#### Defined in

[src/sales_orders.scailo_pb.ts:5065](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L5065)

## Properties

### approvedByUserId

• `Optional` **approvedByUserId**: `bigint`

**`Optional`**

**`Description`**

Filter by the specific user ID who approved the records.

**`Example`**

```ts
501
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approved_by_user_id = 12;

#### Defined in

[src/sales_orders.scailo_pb.ts:4887](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L4887)

___

### approvedOnEnd

• `Optional` **approvedOnEnd**: `bigint`

**`Optional`**

**`Description`**

Filter records approved ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approved_on_end = 11;

#### Defined in

[src/sales_orders.scailo_pb.ts:4871](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L4871)

___

### approvedOnStart

• `Optional` **approvedOnStart**: `bigint`

**`Optional`**

**`Description`**

Filter records approved ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approved_on_start = 10;

#### Defined in

[src/sales_orders.scailo_pb.ts:4855](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L4855)

___

### approverRoleId

• `Optional` **approverRoleId**: `bigint`

**`Optional`**

**`Description`**

Filter by the role ID of the approver.

**`Example`**

```ts
5
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 approver_role_id = 13;

#### Defined in

[src/sales_orders.scailo_pb.ts:4903](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L4903)

___

### bundledWithId

• `Optional` **bundledWithId**: `bigint`

**`Optional`**

**`Description`**

Filter by the internal identifier of the primary sales order line item that this item is bundled with.

**`Example`**

```ts
1025
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 bundled_with_id = 21;

#### Defined in

[src/sales_orders.scailo_pb.ts:4935](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L4935)

___

### clientFamilyCode

• `Optional` **clientFamilyCode**: `string`

**`Optional`**

**`Description`**

Fuzzy match for the client's specific alphanumeric part number, SKU, or family code.

**`Example`**

```ts
"CLI-SKU-992"
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string client_family_code = 26;

#### Defined in

[src/sales_orders.scailo_pb.ts:4983](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L4983)

___

### clientUomId

• `Optional` **clientUomId**: `bigint`

**`Optional`**

**`Description`**

Filter line items requesting a specific client Unit of Measure (UOM).

**`Example`**

```ts
12
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 client_uom_id = 23;

#### Defined in

[src/sales_orders.scailo_pb.ts:4967](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L4967)

___

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.

**`Example`**

```ts
100
```

**`Regex`**

^(?:-1|0|[1-9][0-9]*)$

**`Format`**

Must be -1 or any non-negative integer (>= -1).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/sales_orders.scailo_pb.ts:4775](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L4775)

___

### deliveryDateEnd

• `Optional` **deliveryDateEnd**: `string`

**`Optional`**

**`Description`**

Filter line items scheduled for delivery ON or BEFORE this specific date.

**`Example`**

```ts
"2023-11-30"
```

**`Regex`**

.*

**`Format`**

String following the standard date format (e.g., YYYY-MM-DD).

**`Generated`**

from field: optional string delivery_date_end = 30;

#### Defined in

[src/sales_orders.scailo_pb.ts:5047](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L5047)

___

### deliveryDateExact

• `Optional` **deliveryDateExact**: `string`

**`Optional`**

**`Description`**

Filter line items scheduled for exact delivery on this specific date.

**`Example`**

```ts
"2023-11-15"
```

**`Regex`**

.*

**`Format`**

String following the standard date format (e.g., YYYY-MM-DD).

**`Generated`**

from field: optional string delivery_date_exact = 28;

#### Defined in

[src/sales_orders.scailo_pb.ts:5015](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L5015)

___

### deliveryDateStart

• `Optional` **deliveryDateStart**: `string`

**`Optional`**

**`Description`**

Filter line items scheduled for delivery ON or AFTER this specific date.

**`Example`**

```ts
"2023-11-01"
```

**`Regex`**

.*

**`Format`**

String following the standard date format (e.g., YYYY-MM-DD).

**`Generated`**

from field: optional string delivery_date_start = 29;

#### Defined in

[src/sales_orders.scailo_pb.ts:5031](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L5031)

___

### entityUuid

• `Optional` **entityUuid**: `string`

**`Optional`**

**`Description`**

Filter by the organization UUID.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: optional string entity_uuid = 6;

#### Defined in

[src/sales_orders.scailo_pb.ts:4829](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L4829)

___

### familyId

• `Optional` **familyId**: `bigint`

**`Optional`**

**`Description`**

Filter line items belonging to a specific family.

**`Example`**

```ts
505
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 family_id = 22;

#### Defined in

[src/sales_orders.scailo_pb.ts:4951](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L4951)

___

### isActive

• `Optional` **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/sales_orders.scailo_pb.ts:4759](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L4759)

___

### offset

• `Optional` **offset**: `bigint`

**`Optional`**

**`Description`**

Number of records to skip (offset) for pagination.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 offset = 3;

#### Defined in

[src/sales_orders.scailo_pb.ts:4791](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L4791)

___

### salesOrderId

• `Optional` **salesOrderId**: `bigint`

**`Optional`**

**`Description`**

Filter line items belonging to a specific parent sales order.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 sales_order_id = 20;

#### Defined in

[src/sales_orders.scailo_pb.ts:4919](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L4919)

___

### searchKey

• `Optional` **searchKey**: `string`

**`Optional`**

**`Description`**

The search string to match against reference IDs.

**`Example`**

```ts
"Medical 2023"
```

**`Regex`**

.*

@format: May contain any UTF-8 characters.

**`Generated`**

from field: optional string search_key = 40;

#### Defined in

[src/sales_orders.scailo_pb.ts:5063](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L5063)

___

### sortKey

• `Optional` **sortKey**: [`SALES_ORDER_ITEM_SORT_KEY`](../enums/SALES_ORDER_ITEM_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.SALES_ORDER_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/sales_orders.scailo_pb.ts:4813](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L4813)

___

### sortOrder

• `Optional` **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md)

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: optional Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/sales_orders.scailo_pb.ts:4803](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L4803)

___

### status

• `Optional` **status**: [`SALES_ORDER_ITEM_STATUS`](../enums/SALES_ORDER_ITEM_STATUS.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.SALES_ORDER_ITEM_STATUS status = 7;

#### Defined in

[src/sales_orders.scailo_pb.ts:4839](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L4839)

___

### taxGroupId

• `Optional` **taxGroupId**: `bigint`

**`Optional`**

**`Description`**

Filter line items mapped to a specific tax group.

**`Example`**

```ts
4
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 tax_group_id = 27;

#### Defined in

[src/sales_orders.scailo_pb.ts:4999](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L4999)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_orders.scailo_pb.ts:5072](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L5072)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_orders.scailo_pb.ts:5070](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L5070)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrderItemsSearchRequest"``

#### Defined in

[src/sales_orders.scailo_pb.ts:5071](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L5071)

## Methods

### clone

▸ **clone**(): [`SalesOrderItemsSearchRequest`](SalesOrderItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`SalesOrderItemsSearchRequest`](SalesOrderItemsSearchRequest.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`SalesOrderItemsSearchRequest`](SalesOrderItemsSearchRequest.md) \| `PlainMessage`\<[`SalesOrderItemsSearchRequest`](SalesOrderItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`SalesOrderItemsSearchRequest`](SalesOrderItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesOrderItemsSearchRequest`](SalesOrderItemsSearchRequest.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`SalesOrderItemsSearchRequest`](SalesOrderItemsSearchRequest.md) \| `PlainMessage`\<[`SalesOrderItemsSearchRequest`](SalesOrderItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`SalesOrderItemsSearchRequest`](SalesOrderItemsSearchRequest.md) \| `PlainMessage`\<[`SalesOrderItemsSearchRequest`](SalesOrderItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_orders.scailo_pb.ts:5108](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L5108)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesOrderItemsSearchRequest`](SalesOrderItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesOrderItemsSearchRequest`](SalesOrderItemsSearchRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:5096](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L5096)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesOrderItemsSearchRequest`](SalesOrderItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderItemsSearchRequest`](SalesOrderItemsSearchRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:5100](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L5100)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesOrderItemsSearchRequest`](SalesOrderItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesOrderItemsSearchRequest`](SalesOrderItemsSearchRequest.md)

#### Defined in

[src/sales_orders.scailo_pb.ts:5104](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_orders.scailo_pb.ts#L5104)
