[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ShiftsServicePaginationReq

# Class: ShiftsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.ShiftsServicePaginationReq

## Hierarchy

- `Message`\<[`ShiftsServicePaginationReq`](ShiftsServicePaginationReq.md)\>

  ↳ **`ShiftsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](ShiftsServicePaginationReq.md#constructor)

### Properties

- [count](ShiftsServicePaginationReq.md#count)
- [isActive](ShiftsServicePaginationReq.md#isactive)
- [offset](ShiftsServicePaginationReq.md#offset)
- [sortKey](ShiftsServicePaginationReq.md#sortkey)
- [sortOrder](ShiftsServicePaginationReq.md#sortorder)
- [status](ShiftsServicePaginationReq.md#status)
- [fields](ShiftsServicePaginationReq.md#fields)
- [runtime](ShiftsServicePaginationReq.md#runtime)
- [typeName](ShiftsServicePaginationReq.md#typename)

### Methods

- [clone](ShiftsServicePaginationReq.md#clone)
- [equals](ShiftsServicePaginationReq.md#equals)
- [fromBinary](ShiftsServicePaginationReq.md#frombinary)
- [fromJson](ShiftsServicePaginationReq.md#fromjson)
- [fromJsonString](ShiftsServicePaginationReq.md#fromjsonstring)
- [getType](ShiftsServicePaginationReq.md#gettype)
- [toBinary](ShiftsServicePaginationReq.md#tobinary)
- [toJSON](ShiftsServicePaginationReq.md#tojson)
- [toJson](ShiftsServicePaginationReq.md#tojson-1)
- [toJsonString](ShiftsServicePaginationReq.md#tojsonstring)
- [equals](ShiftsServicePaginationReq.md#equals-1)
- [fromBinary](ShiftsServicePaginationReq.md#frombinary-1)
- [fromJson](ShiftsServicePaginationReq.md#fromjson-1)
- [fromJsonString](ShiftsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShiftsServicePaginationReq**(`data?`): [`ShiftsServicePaginationReq`](ShiftsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ShiftsServicePaginationReq`](ShiftsServicePaginationReq.md)\> |

#### Returns

[`ShiftsServicePaginationReq`](ShiftsServicePaginationReq.md)

#### Overrides

Message\&lt;ShiftsServicePaginationReq\&gt;.constructor

#### Defined in

[src/shifts.scailo_pb.ts:582](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts.scailo_pb.ts#L582)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/shifts.scailo_pb.ts:552](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts.scailo_pb.ts#L552)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/shifts.scailo_pb.ts:545](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts.scailo_pb.ts#L545)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/shifts.scailo_pb.ts:559](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts.scailo_pb.ts#L559)

___

### sortKey

• **sortKey**: [`SHIFT_SORT_KEY`](../enums/SHIFT_SORT_KEY.md) = `SHIFT_SORT_KEY.SHIFT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SHIFT_SORT_KEY sort_key = 5;

#### Defined in

[src/shifts.scailo_pb.ts:573](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts.scailo_pb.ts#L573)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/shifts.scailo_pb.ts:566](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts.scailo_pb.ts#L566)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this shift

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/shifts.scailo_pb.ts:580](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts.scailo_pb.ts#L580)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shifts.scailo_pb.ts:589](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts.scailo_pb.ts#L589)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shifts.scailo_pb.ts:587](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts.scailo_pb.ts#L587)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ShiftsServicePaginationReq"``

#### Defined in

[src/shifts.scailo_pb.ts:588](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts.scailo_pb.ts#L588)

## Methods

### clone

▸ **clone**(): [`ShiftsServicePaginationReq`](ShiftsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`ShiftsServicePaginationReq`](ShiftsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ShiftsServicePaginationReq`](ShiftsServicePaginationReq.md) \| `PlainMessage`\<[`ShiftsServicePaginationReq`](ShiftsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ShiftsServicePaginationReq`](ShiftsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ShiftsServicePaginationReq`](ShiftsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`ShiftsServicePaginationReq`](ShiftsServicePaginationReq.md) \| `PlainMessage`\<[`ShiftsServicePaginationReq`](ShiftsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`ShiftsServicePaginationReq`](ShiftsServicePaginationReq.md) \| `PlainMessage`\<[`ShiftsServicePaginationReq`](ShiftsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shifts.scailo_pb.ts:610](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts.scailo_pb.ts#L610)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShiftsServicePaginationReq`](ShiftsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ShiftsServicePaginationReq`](ShiftsServicePaginationReq.md)

#### Defined in

[src/shifts.scailo_pb.ts:598](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts.scailo_pb.ts#L598)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShiftsServicePaginationReq`](ShiftsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsServicePaginationReq`](ShiftsServicePaginationReq.md)

#### Defined in

[src/shifts.scailo_pb.ts:602](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts.scailo_pb.ts#L602)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShiftsServicePaginationReq`](ShiftsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsServicePaginationReq`](ShiftsServicePaginationReq.md)

#### Defined in

[src/shifts.scailo_pb.ts:606](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts.scailo_pb.ts#L606)
