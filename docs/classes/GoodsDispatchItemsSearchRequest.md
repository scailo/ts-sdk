[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsDispatchItemsSearchRequest

# Class: GoodsDispatchItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.GoodsDispatchItemsSearchRequest

## Hierarchy

- `Message`\<[`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)\>

  ↳ **`GoodsDispatchItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](GoodsDispatchItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](GoodsDispatchItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](GoodsDispatchItemsSearchRequest.md#approvedonend)
- [approvedOnStart](GoodsDispatchItemsSearchRequest.md#approvedonstart)
- [approverRoleId](GoodsDispatchItemsSearchRequest.md#approverroleid)
- [clientFamilyCode](GoodsDispatchItemsSearchRequest.md#clientfamilycode)
- [clientUomId](GoodsDispatchItemsSearchRequest.md#clientuomid)
- [count](GoodsDispatchItemsSearchRequest.md#count)
- [entityUuid](GoodsDispatchItemsSearchRequest.md#entityuuid)
- [familyId](GoodsDispatchItemsSearchRequest.md#familyid)
- [goodsDispatchId](GoodsDispatchItemsSearchRequest.md#goodsdispatchid)
- [isActive](GoodsDispatchItemsSearchRequest.md#isactive)
- [itemHash](GoodsDispatchItemsSearchRequest.md#itemhash)
- [offset](GoodsDispatchItemsSearchRequest.md#offset)
- [searchKey](GoodsDispatchItemsSearchRequest.md#searchkey)
- [sortKey](GoodsDispatchItemsSearchRequest.md#sortkey)
- [sortOrder](GoodsDispatchItemsSearchRequest.md#sortorder)
- [status](GoodsDispatchItemsSearchRequest.md#status)
- [fields](GoodsDispatchItemsSearchRequest.md#fields)
- [runtime](GoodsDispatchItemsSearchRequest.md#runtime)
- [typeName](GoodsDispatchItemsSearchRequest.md#typename)

### Methods

- [clone](GoodsDispatchItemsSearchRequest.md#clone)
- [equals](GoodsDispatchItemsSearchRequest.md#equals)
- [fromBinary](GoodsDispatchItemsSearchRequest.md#frombinary)
- [fromJson](GoodsDispatchItemsSearchRequest.md#fromjson)
- [fromJsonString](GoodsDispatchItemsSearchRequest.md#fromjsonstring)
- [getType](GoodsDispatchItemsSearchRequest.md#gettype)
- [toBinary](GoodsDispatchItemsSearchRequest.md#tobinary)
- [toJSON](GoodsDispatchItemsSearchRequest.md#tojson)
- [toJson](GoodsDispatchItemsSearchRequest.md#tojson-1)
- [toJsonString](GoodsDispatchItemsSearchRequest.md#tojsonstring)
- [equals](GoodsDispatchItemsSearchRequest.md#equals-1)
- [fromBinary](GoodsDispatchItemsSearchRequest.md#frombinary-1)
- [fromJson](GoodsDispatchItemsSearchRequest.md#fromjson-1)
- [fromJsonString](GoodsDispatchItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsDispatchItemsSearchRequest**(`data?`): [`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)\> |

#### Returns

[`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)

#### Overrides

Message\&lt;GoodsDispatchItemsSearchRequest\&gt;.constructor

#### Defined in

src/goods_dispatches.scailo_pb.ts:1325

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

src/goods_dispatches.scailo_pb.ts:1274

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

src/goods_dispatches.scailo_pb.ts:1267

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

src/goods_dispatches.scailo_pb.ts:1260

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

src/goods_dispatches.scailo_pb.ts:1281

___

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as given by the client

**`Generated`**

from field: string client_family_code = 26;

#### Defined in

src/goods_dispatches.scailo_pb.ts:1316

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

The ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 24;

#### Defined in

src/goods_dispatches.scailo_pb.ts:1309

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/goods_dispatches.scailo_pb.ts:1218

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/goods_dispatches.scailo_pb.ts:1246

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 22;

#### Defined in

src/goods_dispatches.scailo_pb.ts:1295

___

### goodsDispatchId

• **goodsDispatchId**: `bigint` = `protoInt64.zero`

The ID of the goods dispatch

**`Generated`**

from field: uint64 goods_dispatch_id = 20;

#### Defined in

src/goods_dispatches.scailo_pb.ts:1288

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/goods_dispatches.scailo_pb.ts:1211

___

### itemHash

• **itemHash**: `string` = `""`

Stores the item hash to be dispatched

**`Generated`**

from field: string item_hash = 23;

#### Defined in

src/goods_dispatches.scailo_pb.ts:1302

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/goods_dispatches.scailo_pb.ts:1225

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

src/goods_dispatches.scailo_pb.ts:1323

___

### sortKey

• **sortKey**: [`GOODS_DISPATCH_ITEM_SORT_KEY`](../enums/GOODS_DISPATCH_ITEM_SORT_KEY.md) = `GOODS_DISPATCH_ITEM_SORT_KEY.GOODS_DISPATCH_ITEM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.GOODS_DISPATCH_ITEM_SORT_KEY sort_key = 5;

#### Defined in

src/goods_dispatches.scailo_pb.ts:1239

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/goods_dispatches.scailo_pb.ts:1232

___

### status

• **status**: [`GOODS_DISPATCH_ITEM_STATUS`](../enums/GOODS_DISPATCH_ITEM_STATUS.md) = `GOODS_DISPATCH_ITEM_STATUS.GOODS_DISPATCH_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.GOODS_DISPATCH_ITEM_STATUS status = 7;

#### Defined in

src/goods_dispatches.scailo_pb.ts:1253

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/goods_dispatches.scailo_pb.ts:1332

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/goods_dispatches.scailo_pb.ts:1330

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsDispatchItemsSearchRequest"``

#### Defined in

src/goods_dispatches.scailo_pb.ts:1331

## Methods

### clone

▸ **clone**(): [`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md) \| `PlainMessage`\<[`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md) \| `PlainMessage`\<[`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md) \| `PlainMessage`\<[`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/goods_dispatches.scailo_pb.ts:1364

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)

#### Defined in

src/goods_dispatches.scailo_pb.ts:1352

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)

#### Defined in

src/goods_dispatches.scailo_pb.ts:1356

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsDispatchItemsSearchRequest`](GoodsDispatchItemsSearchRequest.md)

#### Defined in

src/goods_dispatches.scailo_pb.ts:1360
