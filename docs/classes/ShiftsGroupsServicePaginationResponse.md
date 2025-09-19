[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ShiftsGroupsServicePaginationResponse

# Class: ShiftsGroupsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.ShiftsGroupsServicePaginationResponse

## Hierarchy

- `Message`\<[`ShiftsGroupsServicePaginationResponse`](ShiftsGroupsServicePaginationResponse.md)\>

  ↳ **`ShiftsGroupsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](ShiftsGroupsServicePaginationResponse.md#constructor)

### Properties

- [count](ShiftsGroupsServicePaginationResponse.md#count)
- [offset](ShiftsGroupsServicePaginationResponse.md#offset)
- [payload](ShiftsGroupsServicePaginationResponse.md#payload)
- [total](ShiftsGroupsServicePaginationResponse.md#total)
- [fields](ShiftsGroupsServicePaginationResponse.md#fields)
- [runtime](ShiftsGroupsServicePaginationResponse.md#runtime)
- [typeName](ShiftsGroupsServicePaginationResponse.md#typename)

### Methods

- [clone](ShiftsGroupsServicePaginationResponse.md#clone)
- [equals](ShiftsGroupsServicePaginationResponse.md#equals)
- [fromBinary](ShiftsGroupsServicePaginationResponse.md#frombinary)
- [fromJson](ShiftsGroupsServicePaginationResponse.md#fromjson)
- [fromJsonString](ShiftsGroupsServicePaginationResponse.md#fromjsonstring)
- [getType](ShiftsGroupsServicePaginationResponse.md#gettype)
- [toBinary](ShiftsGroupsServicePaginationResponse.md#tobinary)
- [toJSON](ShiftsGroupsServicePaginationResponse.md#tojson)
- [toJson](ShiftsGroupsServicePaginationResponse.md#tojson-1)
- [toJsonString](ShiftsGroupsServicePaginationResponse.md#tojsonstring)
- [equals](ShiftsGroupsServicePaginationResponse.md#equals-1)
- [fromBinary](ShiftsGroupsServicePaginationResponse.md#frombinary-1)
- [fromJson](ShiftsGroupsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](ShiftsGroupsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShiftsGroupsServicePaginationResponse**(`data?`): [`ShiftsGroupsServicePaginationResponse`](ShiftsGroupsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ShiftsGroupsServicePaginationResponse`](ShiftsGroupsServicePaginationResponse.md)\> |

#### Returns

[`ShiftsGroupsServicePaginationResponse`](ShiftsGroupsServicePaginationResponse.md)

#### Overrides

Message\&lt;ShiftsGroupsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/shifts_groups.scailo_pb.ts:858](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L858)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/shifts_groups.scailo_pb.ts:835](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L835)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/shifts_groups.scailo_pb.ts:842](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L842)

___

### payload

• **payload**: [`ShiftGroup`](ShiftGroup.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.ShiftGroup payload = 4;

#### Defined in

[src/shifts_groups.scailo_pb.ts:856](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L856)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/shifts_groups.scailo_pb.ts:849](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L849)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shifts_groups.scailo_pb.ts:865](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L865)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shifts_groups.scailo_pb.ts:863](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L863)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ShiftsGroupsServicePaginationResponse"``

#### Defined in

[src/shifts_groups.scailo_pb.ts:864](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L864)

## Methods

### clone

▸ **clone**(): [`ShiftsGroupsServicePaginationResponse`](ShiftsGroupsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`ShiftsGroupsServicePaginationResponse`](ShiftsGroupsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`ShiftsGroupsServicePaginationResponse`](ShiftsGroupsServicePaginationResponse.md) \| `PlainMessage`\<[`ShiftsGroupsServicePaginationResponse`](ShiftsGroupsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`ShiftsGroupsServicePaginationResponse`](ShiftsGroupsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ShiftsGroupsServicePaginationResponse`](ShiftsGroupsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`ShiftsGroupsServicePaginationResponse`](ShiftsGroupsServicePaginationResponse.md) \| `PlainMessage`\<[`ShiftsGroupsServicePaginationResponse`](ShiftsGroupsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`ShiftsGroupsServicePaginationResponse`](ShiftsGroupsServicePaginationResponse.md) \| `PlainMessage`\<[`ShiftsGroupsServicePaginationResponse`](ShiftsGroupsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shifts_groups.scailo_pb.ts:884](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L884)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShiftsGroupsServicePaginationResponse`](ShiftsGroupsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ShiftsGroupsServicePaginationResponse`](ShiftsGroupsServicePaginationResponse.md)

#### Defined in

[src/shifts_groups.scailo_pb.ts:872](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L872)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShiftsGroupsServicePaginationResponse`](ShiftsGroupsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServicePaginationResponse`](ShiftsGroupsServicePaginationResponse.md)

#### Defined in

[src/shifts_groups.scailo_pb.ts:876](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L876)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShiftsGroupsServicePaginationResponse`](ShiftsGroupsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServicePaginationResponse`](ShiftsGroupsServicePaginationResponse.md)

#### Defined in

[src/shifts_groups.scailo_pb.ts:880](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts_groups.scailo_pb.ts#L880)
