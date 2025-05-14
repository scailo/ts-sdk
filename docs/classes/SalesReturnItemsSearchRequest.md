[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesReturnItemsSearchRequest

# Class: SalesReturnItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.SalesReturnItemsSearchRequest

## Hierarchy

- `Message`\<[`SalesReturnItemsSearchRequest`](SalesReturnItemsSearchRequest.md)\>

  ↳ **`SalesReturnItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](SalesReturnItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](SalesReturnItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](SalesReturnItemsSearchRequest.md#approvedonend)
- [approvedOnStart](SalesReturnItemsSearchRequest.md#approvedonstart)
- [approverRoleId](SalesReturnItemsSearchRequest.md#approverroleid)
- [clientUomId](SalesReturnItemsSearchRequest.md#clientuomid)
- [count](SalesReturnItemsSearchRequest.md#count)
- [entityUuid](SalesReturnItemsSearchRequest.md#entityuuid)
- [familyId](SalesReturnItemsSearchRequest.md#familyid)
- [isActive](SalesReturnItemsSearchRequest.md#isactive)
- [itemHash](SalesReturnItemsSearchRequest.md#itemhash)
- [offset](SalesReturnItemsSearchRequest.md#offset)
- [salesReturnId](SalesReturnItemsSearchRequest.md#salesreturnid)
- [searchKey](SalesReturnItemsSearchRequest.md#searchkey)
- [sortKey](SalesReturnItemsSearchRequest.md#sortkey)
- [sortOrder](SalesReturnItemsSearchRequest.md#sortorder)
- [status](SalesReturnItemsSearchRequest.md#status)
- [fields](SalesReturnItemsSearchRequest.md#fields)
- [runtime](SalesReturnItemsSearchRequest.md#runtime)
- [typeName](SalesReturnItemsSearchRequest.md#typename)

### Methods

- [clone](SalesReturnItemsSearchRequest.md#clone)
- [equals](SalesReturnItemsSearchRequest.md#equals)
- [fromBinary](SalesReturnItemsSearchRequest.md#frombinary)
- [fromJson](SalesReturnItemsSearchRequest.md#fromjson)
- [fromJsonString](SalesReturnItemsSearchRequest.md#fromjsonstring)
- [getType](SalesReturnItemsSearchRequest.md#gettype)
- [toBinary](SalesReturnItemsSearchRequest.md#tobinary)
- [toJSON](SalesReturnItemsSearchRequest.md#tojson)
- [toJson](SalesReturnItemsSearchRequest.md#tojson-1)
- [toJsonString](SalesReturnItemsSearchRequest.md#tojsonstring)
- [equals](SalesReturnItemsSearchRequest.md#equals-1)
- [fromBinary](SalesReturnItemsSearchRequest.md#frombinary-1)
- [fromJson](SalesReturnItemsSearchRequest.md#fromjson-1)
- [fromJsonString](SalesReturnItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReturnItemsSearchRequest**(`data?`): [`SalesReturnItemsSearchRequest`](SalesReturnItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesReturnItemsSearchRequest`](SalesReturnItemsSearchRequest.md)\> |

#### Returns

[`SalesReturnItemsSearchRequest`](SalesReturnItemsSearchRequest.md)

#### Overrides

Message\&lt;SalesReturnItemsSearchRequest\&gt;.constructor

#### Defined in

src/sales_returns.scailo_pb.ts:1255

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

src/sales_returns.scailo_pb.ts:1211

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

src/sales_returns.scailo_pb.ts:1204

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

src/sales_returns.scailo_pb.ts:1197

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

src/sales_returns.scailo_pb.ts:1218

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

The ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 24;

#### Defined in

src/sales_returns.scailo_pb.ts:1246

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/sales_returns.scailo_pb.ts:1155

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/sales_returns.scailo_pb.ts:1183

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 22;

#### Defined in

src/sales_returns.scailo_pb.ts:1232

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/sales_returns.scailo_pb.ts:1148

___

### itemHash

• **itemHash**: `string` = `""`

Stores the item hash to be dispatched

**`Generated`**

from field: string item_hash = 23;

#### Defined in

src/sales_returns.scailo_pb.ts:1239

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/sales_returns.scailo_pb.ts:1162

___

### salesReturnId

• **salesReturnId**: `bigint` = `protoInt64.zero`

The ID of the sales return

**`Generated`**

from field: uint64 sales_return_id = 20;

#### Defined in

src/sales_returns.scailo_pb.ts:1225

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

src/sales_returns.scailo_pb.ts:1253

___

### sortKey

• **sortKey**: [`SALES_RETURN_ITEM_SORT_KEY`](../enums/SALES_RETURN_ITEM_SORT_KEY.md) = `SALES_RETURN_ITEM_SORT_KEY.SALES_RETURN_ITEM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SALES_RETURN_ITEM_SORT_KEY sort_key = 5;

#### Defined in

src/sales_returns.scailo_pb.ts:1176

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/sales_returns.scailo_pb.ts:1169

___

### status

• **status**: [`SALES_RETURN_ITEM_STATUS`](../enums/SALES_RETURN_ITEM_STATUS.md) = `SALES_RETURN_ITEM_STATUS.SALES_RETURN_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.SALES_RETURN_ITEM_STATUS status = 7;

#### Defined in

src/sales_returns.scailo_pb.ts:1190

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_returns.scailo_pb.ts:1262

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_returns.scailo_pb.ts:1260

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesReturnItemsSearchRequest"``

#### Defined in

src/sales_returns.scailo_pb.ts:1261

## Methods

### clone

▸ **clone**(): [`SalesReturnItemsSearchRequest`](SalesReturnItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`SalesReturnItemsSearchRequest`](SalesReturnItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReturnItemsSearchRequest`](SalesReturnItemsSearchRequest.md) \| `PlainMessage`\<[`SalesReturnItemsSearchRequest`](SalesReturnItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesReturnItemsSearchRequest`](SalesReturnItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesReturnItemsSearchRequest`](SalesReturnItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`SalesReturnItemsSearchRequest`](SalesReturnItemsSearchRequest.md) \| `PlainMessage`\<[`SalesReturnItemsSearchRequest`](SalesReturnItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`SalesReturnItemsSearchRequest`](SalesReturnItemsSearchRequest.md) \| `PlainMessage`\<[`SalesReturnItemsSearchRequest`](SalesReturnItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_returns.scailo_pb.ts:1293

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReturnItemsSearchRequest`](SalesReturnItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesReturnItemsSearchRequest`](SalesReturnItemsSearchRequest.md)

#### Defined in

src/sales_returns.scailo_pb.ts:1281

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReturnItemsSearchRequest`](SalesReturnItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReturnItemsSearchRequest`](SalesReturnItemsSearchRequest.md)

#### Defined in

src/sales_returns.scailo_pb.ts:1285

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReturnItemsSearchRequest`](SalesReturnItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReturnItemsSearchRequest`](SalesReturnItemsSearchRequest.md)

#### Defined in

src/sales_returns.scailo_pb.ts:1289
