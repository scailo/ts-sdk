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

[src/goods_receipts.scailo_pb.ts:1697](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L1697)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

[src/goods_receipts.scailo_pb.ts:1649](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L1649)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

[src/goods_receipts.scailo_pb.ts:1642](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L1642)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

[src/goods_receipts.scailo_pb.ts:1635](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L1635)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

[src/goods_receipts.scailo_pb.ts:1656](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L1656)

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

[src/goods_receipts.scailo_pb.ts:1567](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L1567)

___

### entityUuid

• **entityUuid**: `string` = `""`

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

from field: string entity_uuid = 6;

#### Defined in

[src/goods_receipts.scailo_pb.ts:1621](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L1621)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 22;

#### Defined in

[src/goods_receipts.scailo_pb.ts:1670](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L1670)

___

### goodsReceiptId

• **goodsReceiptId**: `bigint` = `protoInt64.zero`

The ID of the goods receipt

**`Generated`**

from field: uint64 goods_receipt_id = 20;

#### Defined in

[src/goods_receipts.scailo_pb.ts:1663](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L1663)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/goods_receipts.scailo_pb.ts:1551](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L1551)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

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

from field: uint64 offset = 3;

#### Defined in

[src/goods_receipts.scailo_pb.ts:1583](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L1583)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

[src/goods_receipts.scailo_pb.ts:1684](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L1684)

___

### sortKey

• **sortKey**: [`GOODS_RECEIPT_ITEM_SORT_KEY`](../enums/GOODS_RECEIPT_ITEM_SORT_KEY.md) = `GOODS_RECEIPT_ITEM_SORT_KEY.GOODS_RECEIPT_ITEM_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.GOODS_RECEIPT_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/goods_receipts.scailo_pb.ts:1605](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L1605)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/goods_receipts.scailo_pb.ts:1595](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L1595)

___

### status

• **status**: [`GOODS_RECEIPT_ITEM_STATUS`](../enums/GOODS_RECEIPT_ITEM_STATUS.md) = `GOODS_RECEIPT_ITEM_STATUS.GOODS_RECEIPT_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.GOODS_RECEIPT_ITEM_STATUS status = 7;

#### Defined in

[src/goods_receipts.scailo_pb.ts:1628](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L1628)

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

[src/goods_receipts.scailo_pb.ts:1695](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L1695)

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

The ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 24;

#### Defined in

[src/goods_receipts.scailo_pb.ts:1677](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L1677)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_receipts.scailo_pb.ts:1704](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L1704)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_receipts.scailo_pb.ts:1702](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L1702)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsReceiptItemsSearchRequest"``

#### Defined in

[src/goods_receipts.scailo_pb.ts:1703](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L1703)

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

[src/goods_receipts.scailo_pb.ts:1735](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L1735)

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

[src/goods_receipts.scailo_pb.ts:1723](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L1723)

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

[src/goods_receipts.scailo_pb.ts:1727](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L1727)

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

[src/goods_receipts.scailo_pb.ts:1731](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/goods_receipts.scailo_pb.ts#L1731)
