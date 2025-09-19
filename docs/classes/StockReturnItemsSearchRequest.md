[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockReturnItemsSearchRequest

# Class: StockReturnItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.StockReturnItemsSearchRequest

## Hierarchy

- `Message`\<[`StockReturnItemsSearchRequest`](StockReturnItemsSearchRequest.md)\>

  ↳ **`StockReturnItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](StockReturnItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](StockReturnItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](StockReturnItemsSearchRequest.md#approvedonend)
- [approvedOnStart](StockReturnItemsSearchRequest.md#approvedonstart)
- [approverRoleId](StockReturnItemsSearchRequest.md#approverroleid)
- [count](StockReturnItemsSearchRequest.md#count)
- [entityUuid](StockReturnItemsSearchRequest.md#entityuuid)
- [familyId](StockReturnItemsSearchRequest.md#familyid)
- [isActive](StockReturnItemsSearchRequest.md#isactive)
- [itemHash](StockReturnItemsSearchRequest.md#itemhash)
- [offset](StockReturnItemsSearchRequest.md#offset)
- [searchKey](StockReturnItemsSearchRequest.md#searchkey)
- [sortKey](StockReturnItemsSearchRequest.md#sortkey)
- [sortOrder](StockReturnItemsSearchRequest.md#sortorder)
- [status](StockReturnItemsSearchRequest.md#status)
- [stockReturnId](StockReturnItemsSearchRequest.md#stockreturnid)
- [fields](StockReturnItemsSearchRequest.md#fields)
- [runtime](StockReturnItemsSearchRequest.md#runtime)
- [typeName](StockReturnItemsSearchRequest.md#typename)

### Methods

- [clone](StockReturnItemsSearchRequest.md#clone)
- [equals](StockReturnItemsSearchRequest.md#equals)
- [fromBinary](StockReturnItemsSearchRequest.md#frombinary)
- [fromJson](StockReturnItemsSearchRequest.md#fromjson)
- [fromJsonString](StockReturnItemsSearchRequest.md#fromjsonstring)
- [getType](StockReturnItemsSearchRequest.md#gettype)
- [toBinary](StockReturnItemsSearchRequest.md#tobinary)
- [toJSON](StockReturnItemsSearchRequest.md#tojson)
- [toJson](StockReturnItemsSearchRequest.md#tojson-1)
- [toJsonString](StockReturnItemsSearchRequest.md#tojsonstring)
- [equals](StockReturnItemsSearchRequest.md#equals-1)
- [fromBinary](StockReturnItemsSearchRequest.md#frombinary-1)
- [fromJson](StockReturnItemsSearchRequest.md#fromjson-1)
- [fromJsonString](StockReturnItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockReturnItemsSearchRequest**(`data?`): [`StockReturnItemsSearchRequest`](StockReturnItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockReturnItemsSearchRequest`](StockReturnItemsSearchRequest.md)\> |

#### Returns

[`StockReturnItemsSearchRequest`](StockReturnItemsSearchRequest.md)

#### Overrides

Message\&lt;StockReturnItemsSearchRequest\&gt;.constructor

#### Defined in

[src/stock_returns.scailo_pb.ts:1863](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_returns.scailo_pb.ts#L1863)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

[src/stock_returns.scailo_pb.ts:1826](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_returns.scailo_pb.ts#L1826)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

[src/stock_returns.scailo_pb.ts:1819](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_returns.scailo_pb.ts#L1819)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

[src/stock_returns.scailo_pb.ts:1812](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_returns.scailo_pb.ts#L1812)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

[src/stock_returns.scailo_pb.ts:1833](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_returns.scailo_pb.ts#L1833)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/stock_returns.scailo_pb.ts:1770](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_returns.scailo_pb.ts#L1770)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/stock_returns.scailo_pb.ts:1798](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_returns.scailo_pb.ts#L1798)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 21;

#### Defined in

[src/stock_returns.scailo_pb.ts:1847](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_returns.scailo_pb.ts#L1847)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/stock_returns.scailo_pb.ts:1763](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_returns.scailo_pb.ts#L1763)

___

### itemHash

• **itemHash**: `string` = `""`

Stores the item hash

**`Generated`**

from field: string item_hash = 22;

#### Defined in

[src/stock_returns.scailo_pb.ts:1854](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_returns.scailo_pb.ts#L1854)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/stock_returns.scailo_pb.ts:1777](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_returns.scailo_pb.ts#L1777)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

[src/stock_returns.scailo_pb.ts:1861](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_returns.scailo_pb.ts#L1861)

___

### sortKey

• **sortKey**: [`STOCK_RETURN_ITEM_SORT_KEY`](../enums/STOCK_RETURN_ITEM_SORT_KEY.md) = `STOCK_RETURN_ITEM_SORT_KEY.STOCK_RETURN_ITEM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.STOCK_RETURN_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/stock_returns.scailo_pb.ts:1791](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_returns.scailo_pb.ts#L1791)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/stock_returns.scailo_pb.ts:1784](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_returns.scailo_pb.ts#L1784)

___

### status

• **status**: [`STOCK_RETURN_ITEM_STATUS`](../enums/STOCK_RETURN_ITEM_STATUS.md) = `STOCK_RETURN_ITEM_STATUS.STOCK_RETURN_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.STOCK_RETURN_ITEM_STATUS status = 7;

#### Defined in

[src/stock_returns.scailo_pb.ts:1805](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_returns.scailo_pb.ts#L1805)

___

### stockReturnId

• **stockReturnId**: `bigint` = `protoInt64.zero`

The ID of the stock return

**`Generated`**

from field: uint64 stock_return_id = 20;

#### Defined in

[src/stock_returns.scailo_pb.ts:1840](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_returns.scailo_pb.ts#L1840)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_returns.scailo_pb.ts:1870](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_returns.scailo_pb.ts#L1870)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_returns.scailo_pb.ts:1868](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_returns.scailo_pb.ts#L1868)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockReturnItemsSearchRequest"``

#### Defined in

[src/stock_returns.scailo_pb.ts:1869](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_returns.scailo_pb.ts#L1869)

## Methods

### clone

▸ **clone**(): [`StockReturnItemsSearchRequest`](StockReturnItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`StockReturnItemsSearchRequest`](StockReturnItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`StockReturnItemsSearchRequest`](StockReturnItemsSearchRequest.md) \| `PlainMessage`\<[`StockReturnItemsSearchRequest`](StockReturnItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockReturnItemsSearchRequest`](StockReturnItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockReturnItemsSearchRequest`](StockReturnItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`StockReturnItemsSearchRequest`](StockReturnItemsSearchRequest.md) \| `PlainMessage`\<[`StockReturnItemsSearchRequest`](StockReturnItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`StockReturnItemsSearchRequest`](StockReturnItemsSearchRequest.md) \| `PlainMessage`\<[`StockReturnItemsSearchRequest`](StockReturnItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_returns.scailo_pb.ts:1900](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_returns.scailo_pb.ts#L1900)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockReturnItemsSearchRequest`](StockReturnItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockReturnItemsSearchRequest`](StockReturnItemsSearchRequest.md)

#### Defined in

[src/stock_returns.scailo_pb.ts:1888](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_returns.scailo_pb.ts#L1888)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockReturnItemsSearchRequest`](StockReturnItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockReturnItemsSearchRequest`](StockReturnItemsSearchRequest.md)

#### Defined in

[src/stock_returns.scailo_pb.ts:1892](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_returns.scailo_pb.ts#L1892)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockReturnItemsSearchRequest`](StockReturnItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockReturnItemsSearchRequest`](StockReturnItemsSearchRequest.md)

#### Defined in

[src/stock_returns.scailo_pb.ts:1896](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_returns.scailo_pb.ts#L1896)
