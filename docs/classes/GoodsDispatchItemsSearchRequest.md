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

[src/goods_dispatches.scailo_pb.ts:1607](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1607)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1556](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1556)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1549](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1549)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1542](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1542)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1563](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1563)

___

### clientFamilyCode

• **clientFamilyCode**: `string` = `""`

Stores the family code as given by the client

**`Generated`**

from field: string client_family_code = 26;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1598](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1598)

___

### clientUomId

• **clientUomId**: `bigint` = `protoInt64.zero`

The ID of the client's unit of material

**`Generated`**

from field: uint64 client_uom_id = 24;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1591](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1591)

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

[src/goods_dispatches.scailo_pb.ts:1474](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1474)

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

[src/goods_dispatches.scailo_pb.ts:1528](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1528)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 22;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1577](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1577)

___

### goodsDispatchId

• **goodsDispatchId**: `bigint` = `protoInt64.zero`

The ID of the goods dispatch

**`Generated`**

from field: uint64 goods_dispatch_id = 20;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1570](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1570)

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

[src/goods_dispatches.scailo_pb.ts:1458](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1458)

___

### itemHash

• **itemHash**: `string` = `""`

Stores the item hash to be dispatched

**`Generated`**

from field: string item_hash = 23;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1584](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1584)

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

[src/goods_dispatches.scailo_pb.ts:1490](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1490)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1605](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1605)

___

### sortKey

• **sortKey**: [`GOODS_DISPATCH_ITEM_SORT_KEY`](../enums/GOODS_DISPATCH_ITEM_SORT_KEY.md) = `GOODS_DISPATCH_ITEM_SORT_KEY.GOODS_DISPATCH_ITEM_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.GOODS_DISPATCH_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1512](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1512)

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

[src/goods_dispatches.scailo_pb.ts:1502](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1502)

___

### status

• **status**: [`GOODS_DISPATCH_ITEM_STATUS`](../enums/GOODS_DISPATCH_ITEM_STATUS.md) = `GOODS_DISPATCH_ITEM_STATUS.GOODS_DISPATCH_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.GOODS_DISPATCH_ITEM_STATUS status = 7;

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1535](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1535)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1614](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1614)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1612](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1612)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoodsDispatchItemsSearchRequest"``

#### Defined in

[src/goods_dispatches.scailo_pb.ts:1613](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1613)

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

[src/goods_dispatches.scailo_pb.ts:1646](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1646)

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

[src/goods_dispatches.scailo_pb.ts:1634](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1634)

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

[src/goods_dispatches.scailo_pb.ts:1638](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1638)

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

[src/goods_dispatches.scailo_pb.ts:1642](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/goods_dispatches.scailo_pb.ts#L1642)
