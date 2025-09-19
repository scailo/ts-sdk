[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockAuditsServiceSearchAllReq

# Class: StockAuditsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.StockAuditsServiceSearchAllReq

## Hierarchy

- `Message`\<[`StockAuditsServiceSearchAllReq`](StockAuditsServiceSearchAllReq.md)\>

  ↳ **`StockAuditsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](StockAuditsServiceSearchAllReq.md#constructor)

### Properties

- [count](StockAuditsServiceSearchAllReq.md#count)
- [entityUuid](StockAuditsServiceSearchAllReq.md#entityuuid)
- [isActive](StockAuditsServiceSearchAllReq.md#isactive)
- [offset](StockAuditsServiceSearchAllReq.md#offset)
- [searchKey](StockAuditsServiceSearchAllReq.md#searchkey)
- [sortKey](StockAuditsServiceSearchAllReq.md#sortkey)
- [sortOrder](StockAuditsServiceSearchAllReq.md#sortorder)
- [status](StockAuditsServiceSearchAllReq.md#status)
- [fields](StockAuditsServiceSearchAllReq.md#fields)
- [runtime](StockAuditsServiceSearchAllReq.md#runtime)
- [typeName](StockAuditsServiceSearchAllReq.md#typename)

### Methods

- [clone](StockAuditsServiceSearchAllReq.md#clone)
- [equals](StockAuditsServiceSearchAllReq.md#equals)
- [fromBinary](StockAuditsServiceSearchAllReq.md#frombinary)
- [fromJson](StockAuditsServiceSearchAllReq.md#fromjson)
- [fromJsonString](StockAuditsServiceSearchAllReq.md#fromjsonstring)
- [getType](StockAuditsServiceSearchAllReq.md#gettype)
- [toBinary](StockAuditsServiceSearchAllReq.md#tobinary)
- [toJSON](StockAuditsServiceSearchAllReq.md#tojson)
- [toJson](StockAuditsServiceSearchAllReq.md#tojson-1)
- [toJsonString](StockAuditsServiceSearchAllReq.md#tojsonstring)
- [equals](StockAuditsServiceSearchAllReq.md#equals-1)
- [fromBinary](StockAuditsServiceSearchAllReq.md#frombinary-1)
- [fromJson](StockAuditsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](StockAuditsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockAuditsServiceSearchAllReq**(`data?`): [`StockAuditsServiceSearchAllReq`](StockAuditsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockAuditsServiceSearchAllReq`](StockAuditsServiceSearchAllReq.md)\> |

#### Returns

[`StockAuditsServiceSearchAllReq`](StockAuditsServiceSearchAllReq.md)

#### Overrides

Message\&lt;StockAuditsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/stock_audits.scailo_pb.ts:1571](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_audits.scailo_pb.ts#L1571)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/stock_audits.scailo_pb.ts:1527](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_audits.scailo_pb.ts#L1527)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/stock_audits.scailo_pb.ts:1555](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_audits.scailo_pb.ts#L1555)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/stock_audits.scailo_pb.ts:1520](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_audits.scailo_pb.ts#L1520)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/stock_audits.scailo_pb.ts:1534](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_audits.scailo_pb.ts#L1534)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/stock_audits.scailo_pb.ts:1569](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_audits.scailo_pb.ts#L1569)

___

### sortKey

• **sortKey**: [`STOCK_AUDIT_SORT_KEY`](../enums/STOCK_AUDIT_SORT_KEY.md) = `STOCK_AUDIT_SORT_KEY.STOCK_AUDIT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.STOCK_AUDIT_SORT_KEY sort_key = 5;

#### Defined in

[src/stock_audits.scailo_pb.ts:1548](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_audits.scailo_pb.ts#L1548)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/stock_audits.scailo_pb.ts:1541](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_audits.scailo_pb.ts#L1541)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/stock_audits.scailo_pb.ts:1562](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_audits.scailo_pb.ts#L1562)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/stock_audits.scailo_pb.ts:1578](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_audits.scailo_pb.ts#L1578)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/stock_audits.scailo_pb.ts:1576](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_audits.scailo_pb.ts#L1576)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockAuditsServiceSearchAllReq"``

#### Defined in

[src/stock_audits.scailo_pb.ts:1577](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_audits.scailo_pb.ts#L1577)

## Methods

### clone

▸ **clone**(): [`StockAuditsServiceSearchAllReq`](StockAuditsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`StockAuditsServiceSearchAllReq`](StockAuditsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`StockAuditsServiceSearchAllReq`](StockAuditsServiceSearchAllReq.md) \| `PlainMessage`\<[`StockAuditsServiceSearchAllReq`](StockAuditsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockAuditsServiceSearchAllReq`](StockAuditsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockAuditsServiceSearchAllReq`](StockAuditsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`StockAuditsServiceSearchAllReq`](StockAuditsServiceSearchAllReq.md) \| `PlainMessage`\<[`StockAuditsServiceSearchAllReq`](StockAuditsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`StockAuditsServiceSearchAllReq`](StockAuditsServiceSearchAllReq.md) \| `PlainMessage`\<[`StockAuditsServiceSearchAllReq`](StockAuditsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/stock_audits.scailo_pb.ts:1601](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_audits.scailo_pb.ts#L1601)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockAuditsServiceSearchAllReq`](StockAuditsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockAuditsServiceSearchAllReq`](StockAuditsServiceSearchAllReq.md)

#### Defined in

[src/stock_audits.scailo_pb.ts:1589](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_audits.scailo_pb.ts#L1589)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockAuditsServiceSearchAllReq`](StockAuditsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockAuditsServiceSearchAllReq`](StockAuditsServiceSearchAllReq.md)

#### Defined in

[src/stock_audits.scailo_pb.ts:1593](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_audits.scailo_pb.ts#L1593)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockAuditsServiceSearchAllReq`](StockAuditsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockAuditsServiceSearchAllReq`](StockAuditsServiceSearchAllReq.md)

#### Defined in

[src/stock_audits.scailo_pb.ts:1597](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/stock_audits.scailo_pb.ts#L1597)
