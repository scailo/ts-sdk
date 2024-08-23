[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesOrderItemsSearchRequest

# Class: SalesOrderItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

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

src/sales_orders.scailo_pb.ts:2794

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

src/sales_orders.scailo_pb.ts:2715

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

src/sales_orders.scailo_pb.ts:2708

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

src/sales_orders.scailo_pb.ts:2701

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

src/sales_orders.scailo_pb.ts:2722

___

### bundledWithId

• **bundledWithId**: `bigint` = `protoInt64.zero`

Stores the ID of the sales order item with which this item is bundled with

**`Generated`**

from field: uint64 bundled_with_id = 21;

#### Defined in

src/sales_orders.scailo_pb.ts:2736

___

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as given by the client

**`Generated`**

from field: string client_family_code = 26;

#### Defined in

src/sales_orders.scailo_pb.ts:2757

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

The ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 23;

#### Defined in

src/sales_orders.scailo_pb.ts:2750

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/sales_orders.scailo_pb.ts:2659

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of the item in the sales order

**`Generated`**

from field: string delivery_date_end = 30;

#### Defined in

src/sales_orders.scailo_pb.ts:2785

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of the item in the sales order

**`Generated`**

from field: string delivery_date_exact = 28;

#### Defined in

src/sales_orders.scailo_pb.ts:2771

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of the item in the sales order

**`Generated`**

from field: string delivery_date_start = 29;

#### Defined in

src/sales_orders.scailo_pb.ts:2778

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/sales_orders.scailo_pb.ts:2687

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 22;

#### Defined in

src/sales_orders.scailo_pb.ts:2743

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/sales_orders.scailo_pb.ts:2652

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/sales_orders.scailo_pb.ts:2666

___

### salesOrderId

• **salesOrderId**: `bigint` = `protoInt64.zero`

The ID of the sales order

**`Generated`**

from field: uint64 sales_order_id = 20;

#### Defined in

src/sales_orders.scailo_pb.ts:2729

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

src/sales_orders.scailo_pb.ts:2792

___

### sortKey

• **sortKey**: [`SALES_ORDER_ITEM_SORT_KEY`](../enums/SALES_ORDER_ITEM_SORT_KEY.md) = `SALES_ORDER_ITEM_SORT_KEY.SALES_ORDER_ITEM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SALES_ORDER_ITEM_SORT_KEY sort_key = 5;

#### Defined in

src/sales_orders.scailo_pb.ts:2680

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/sales_orders.scailo_pb.ts:2673

___

### status

• **status**: [`SALES_ORDER_ITEM_STATUS`](../enums/SALES_ORDER_ITEM_STATUS.md) = `SALES_ORDER_ITEM_STATUS.SALES_ORDER_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.SALES_ORDER_ITEM_STATUS status = 7;

#### Defined in

src/sales_orders.scailo_pb.ts:2694

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the tax group

**`Generated`**

from field: uint64 tax_group_id = 27;

#### Defined in

src/sales_orders.scailo_pb.ts:2764

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_orders.scailo_pb.ts:2801

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_orders.scailo_pb.ts:2799

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesOrderItemsSearchRequest"``

#### Defined in

src/sales_orders.scailo_pb.ts:2800

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

src/sales_orders.scailo_pb.ts:2837

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

src/sales_orders.scailo_pb.ts:2825

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

src/sales_orders.scailo_pb.ts:2829

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

src/sales_orders.scailo_pb.ts:2833
