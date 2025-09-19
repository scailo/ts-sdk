[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / HolidaysServiceSearchAllReq

# Class: HolidaysServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.HolidaysServiceSearchAllReq

## Hierarchy

- `Message`\<[`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)\>

  ↳ **`HolidaysServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](HolidaysServiceSearchAllReq.md#constructor)

### Properties

- [count](HolidaysServiceSearchAllReq.md#count)
- [entityUuid](HolidaysServiceSearchAllReq.md#entityuuid)
- [isActive](HolidaysServiceSearchAllReq.md#isactive)
- [offset](HolidaysServiceSearchAllReq.md#offset)
- [searchKey](HolidaysServiceSearchAllReq.md#searchkey)
- [sortKey](HolidaysServiceSearchAllReq.md#sortkey)
- [sortOrder](HolidaysServiceSearchAllReq.md#sortorder)
- [status](HolidaysServiceSearchAllReq.md#status)
- [fields](HolidaysServiceSearchAllReq.md#fields)
- [runtime](HolidaysServiceSearchAllReq.md#runtime)
- [typeName](HolidaysServiceSearchAllReq.md#typename)

### Methods

- [clone](HolidaysServiceSearchAllReq.md#clone)
- [equals](HolidaysServiceSearchAllReq.md#equals)
- [fromBinary](HolidaysServiceSearchAllReq.md#frombinary)
- [fromJson](HolidaysServiceSearchAllReq.md#fromjson)
- [fromJsonString](HolidaysServiceSearchAllReq.md#fromjsonstring)
- [getType](HolidaysServiceSearchAllReq.md#gettype)
- [toBinary](HolidaysServiceSearchAllReq.md#tobinary)
- [toJSON](HolidaysServiceSearchAllReq.md#tojson)
- [toJson](HolidaysServiceSearchAllReq.md#tojson-1)
- [toJsonString](HolidaysServiceSearchAllReq.md#tojsonstring)
- [equals](HolidaysServiceSearchAllReq.md#equals-1)
- [fromBinary](HolidaysServiceSearchAllReq.md#frombinary-1)
- [fromJson](HolidaysServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](HolidaysServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new HolidaysServiceSearchAllReq**(`data?`): [`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)\> |

#### Returns

[`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)

#### Overrides

Message\&lt;HolidaysServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/holidays.scailo_pb.ts:1396](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L1396)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/holidays.scailo_pb.ts:1352](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L1352)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/holidays.scailo_pb.ts:1380](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L1380)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/holidays.scailo_pb.ts:1345](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L1345)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/holidays.scailo_pb.ts:1359](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L1359)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/holidays.scailo_pb.ts:1394](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L1394)

___

### sortKey

• **sortKey**: [`HOLIDAY_SORT_KEY`](../enums/HOLIDAY_SORT_KEY.md) = `HOLIDAY_SORT_KEY.HOLIDAY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.HOLIDAY_SORT_KEY sort_key = 5;

#### Defined in

[src/holidays.scailo_pb.ts:1373](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L1373)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/holidays.scailo_pb.ts:1366](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L1366)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/holidays.scailo_pb.ts:1387](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L1387)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/holidays.scailo_pb.ts:1403](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L1403)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/holidays.scailo_pb.ts:1401](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L1401)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.HolidaysServiceSearchAllReq"``

#### Defined in

[src/holidays.scailo_pb.ts:1402](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L1402)

## Methods

### clone

▸ **clone**(): [`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md) \| `PlainMessage`\<[`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md) \| `PlainMessage`\<[`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md) \| `PlainMessage`\<[`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/holidays.scailo_pb.ts:1426](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L1426)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)

#### Defined in

[src/holidays.scailo_pb.ts:1414](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L1414)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)

#### Defined in

[src/holidays.scailo_pb.ts:1418](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L1418)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`HolidaysServiceSearchAllReq`](HolidaysServiceSearchAllReq.md)

#### Defined in

[src/holidays.scailo_pb.ts:1422](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/holidays.scailo_pb.ts#L1422)
