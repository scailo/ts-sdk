[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoodsReceiptItemsSearchRequest

# Class: GoodsReceiptItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.GoodsReceiptItemsSearchRequest

## Hierarchy

- `Message`\<[`GoodsReceiptItemsSearchRequest`](GoodsReceiptItemsSearchRequest.md)\>

  ↳ **`GoodsReceiptItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](GoodsReceiptItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](GoodsReceiptItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](GoodsReceiptItemsSearchRequest.md#approvedonend)
- [approvedOnStart](GoodsReceiptItemsSearchRequest.md#approvedonstart)
- [approverRoleId](GoodsReceiptItemsSearchRequest.md#approverroleid)
- [count](GoodsReceiptItemsSearchRequest.md#count)
- [entityUuid](GoodsReceiptItemsSearchRequest.md#entityuuid)
- [familyId](GoodsReceiptItemsSearchRequest.md#familyid)
- [goodsReceiptId](GoodsReceiptItemsSearchRequest.md#goodsreceiptid)
- [isActive](GoodsReceiptItemsSearchRequest.md#isactive)
- [offset](GoodsReceiptItemsSearchRequest.md#offset)
- [searchKey](GoodsReceiptItemsSearchRequest.md#searchkey)
- [sortKey](GoodsReceiptItemsSearchRequest.md#sortkey)
- [sortOrder](GoodsReceiptItemsSearchRequest.md#sortorder)
- [status](GoodsReceiptItemsSearchRequest.md#status)
- [vendorId](GoodsReceiptItemsSearchRequest.md#vendorid)
- [vendorUomId](GoodsReceiptItemsSearchRequest.md#vendoruomid)
- [fields](GoodsReceiptItemsSearchRequest.md#fields)
- [runtime](GoodsReceiptItemsSearchRequest.md#runtime)
- [typeName](GoodsReceiptItemsSearchRequest.md#typename)

### Methods

- [clone](GoodsReceiptItemsSearchRequest.md#clone)
- [equals](GoodsReceiptItemsSearchRequest.md#equals)
- [fromBinary](GoodsReceiptItemsSearchRequest.md#frombinary)
- [fromJson](GoodsReceiptItemsSearchRequest.md#fromjson)
- [fromJsonString](GoodsReceiptItemsSearchRequest.md#fromjsonstring)
- [getType](GoodsReceiptItemsSearchRequest.md#gettype)
- [toBinary](GoodsReceiptItemsSearchRequest.md#tobinary)
- [toJSON](GoodsReceiptItemsSearchRequest.md#tojson)
- [toJson](GoodsReceiptItemsSearchRequest.md#tojson-1)
- [toJsonString](GoodsReceiptItemsSearchRequest.md#tojsonstring)
- [equals](GoodsReceiptItemsSearchRequest.md#equals-1)
- [fromBinary](GoodsReceiptItemsSearchRequest.md#frombinary-1)
- [fromJson](GoodsReceiptItemsSearchRequest.md#fromjson-1)
- [fromJsonString](GoodsReceiptItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoodsReceiptItemsSearchRequest**(`data?`): [`GoodsReceiptItemsSearchRequest`](GoodsReceiptItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoodsReceiptItemsSearchRequest`](GoodsReceiptItemsSearchRequest.md)\> |

#### Returns

[`GoodsReceiptItemsSearchRequest`](GoodsReceiptItemsSearchRequest.md)

#### Overrides

Message\&lt;GoodsReceiptItemsSearchRequest\&gt;.constructor

#### Defined in

[src/goods_receipts.scailo_pb.ts:1344](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L1344)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

[src/goods_receipts.scailo_pb.ts:1296](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L1296)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

[src/goods_receipts.scailo_pb.ts:1289](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L1289)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

[src/goods_receipts.scailo_pb.ts:1282](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L1282)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

[src/goods_receipts.scailo_pb.ts:1303](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L1303)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/goods_receipts.scailo_pb.ts:1240](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L1240)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/goods_receipts.scailo_pb.ts:1268](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L1268)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 22;

#### Defined in

[src/goods_receipts.scailo_pb.ts:1317](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L1317)

___

### goodsReceiptId

• **goodsReceiptId**: `bigint` = `protoInt64.zero`

The ID of the goods receipt

**`Generated`**

from field: uint64 goods_receipt_id = 20;

#### Defined in

[src/goods_receipts.scailo_pb.ts:1310](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L1310)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/goods_receipts.scailo_pb.ts:1233](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L1233)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/goods_receipts.scailo_pb.ts:1247](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L1247)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

[src/goods_receipts.scailo_pb.ts:1331](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L1331)

___

### sortKey

• **sortKey**: [`GOODS_RECEIPT_ITEM_SORT_KEY`](../enums/GOODS_RECEIPT_ITEM_SORT_KEY.md) = `GOODS_RECEIPT_ITEM_SORT_KEY.GOODS_RECEIPT_ITEM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.GOODS_RECEIPT_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/goods_receipts.scailo_pb.ts:1261](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L1261)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/goods_receipts.scailo_pb.ts:1254](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L1254)

___

### status

• **status**: [`GOODS_RECEIPT_ITEM_STATUS`](../enums/GOODS_RECEIPT_ITEM_STATUS.md) = `GOODS_RECEIPT_ITEM_STATUS.GOODS_RECEIPT_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.GOODS_RECEIPT_ITEM_STATUS status = 7;

#### Defined in

[src/goods_receipts.scailo_pb.ts:1275](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L1275)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

------------------------------------------
Extra filters
The ID of the associated vendor

------------------------------------------

**`Generated`**

from field: uint64 vendor_id = 200;

#### Defined in

[src/goods_receipts.scailo_pb.ts:1342](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L1342)

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

The ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 24;

#### Defined in

[src/goods_receipts.scailo_pb.ts:1324](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L1324)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_receipts.scailo_pb.ts:1351](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L1351)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_receipts.scailo_pb.ts:1349](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L1349)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsReceiptItemsSearchRequest"``

#### Defined in

[src/goods_receipts.scailo_pb.ts:1350](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L1350)

## Methods

### clone

▸ **clone**(): [`GoodsReceiptItemsSearchRequest`](GoodsReceiptItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`GoodsReceiptItemsSearchRequest`](GoodsReceiptItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoodsReceiptItemsSearchRequest`](GoodsReceiptItemsSearchRequest.md) \| `PlainMessage`\<[`GoodsReceiptItemsSearchRequest`](GoodsReceiptItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoodsReceiptItemsSearchRequest`](GoodsReceiptItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoodsReceiptItemsSearchRequest`](GoodsReceiptItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`GoodsReceiptItemsSearchRequest`](GoodsReceiptItemsSearchRequest.md) \| `PlainMessage`\<[`GoodsReceiptItemsSearchRequest`](GoodsReceiptItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`GoodsReceiptItemsSearchRequest`](GoodsReceiptItemsSearchRequest.md) \| `PlainMessage`\<[`GoodsReceiptItemsSearchRequest`](GoodsReceiptItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goods_receipts.scailo_pb.ts:1382](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L1382)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoodsReceiptItemsSearchRequest`](GoodsReceiptItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoodsReceiptItemsSearchRequest`](GoodsReceiptItemsSearchRequest.md)

#### Defined in

[src/goods_receipts.scailo_pb.ts:1370](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L1370)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoodsReceiptItemsSearchRequest`](GoodsReceiptItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptItemsSearchRequest`](GoodsReceiptItemsSearchRequest.md)

#### Defined in

[src/goods_receipts.scailo_pb.ts:1374](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L1374)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoodsReceiptItemsSearchRequest`](GoodsReceiptItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoodsReceiptItemsSearchRequest`](GoodsReceiptItemsSearchRequest.md)

#### Defined in

[src/goods_receipts.scailo_pb.ts:1378](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/goods_receipts.scailo_pb.ts#L1378)
