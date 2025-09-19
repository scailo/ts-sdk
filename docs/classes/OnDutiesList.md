[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OnDutiesList

# Class: OnDutiesList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.OnDutiesList

## Hierarchy

- `Message`\<[`OnDutiesList`](OnDutiesList.md)\>

  ↳ **`OnDutiesList`**

## Table of contents

### Constructors

- [constructor](OnDutiesList.md#constructor)

### Properties

- [list](OnDutiesList.md#list)
- [fields](OnDutiesList.md#fields)
- [runtime](OnDutiesList.md#runtime)
- [typeName](OnDutiesList.md#typename)

### Methods

- [clone](OnDutiesList.md#clone)
- [equals](OnDutiesList.md#equals)
- [fromBinary](OnDutiesList.md#frombinary)
- [fromJson](OnDutiesList.md#fromjson)
- [fromJsonString](OnDutiesList.md#fromjsonstring)
- [getType](OnDutiesList.md#gettype)
- [toBinary](OnDutiesList.md#tobinary)
- [toJSON](OnDutiesList.md#tojson)
- [toJson](OnDutiesList.md#tojson-1)
- [toJsonString](OnDutiesList.md#tojsonstring)
- [equals](OnDutiesList.md#equals-1)
- [fromBinary](OnDutiesList.md#frombinary-1)
- [fromJson](OnDutiesList.md#fromjson-1)
- [fromJsonString](OnDutiesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new OnDutiesList**(`data?`): [`OnDutiesList`](OnDutiesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OnDutiesList`](OnDutiesList.md)\> |

#### Returns

[`OnDutiesList`](OnDutiesList.md)

#### Overrides

Message\&lt;OnDutiesList\&gt;.constructor

#### Defined in

[src/on_duties.scailo_pb.ts:650](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L650)

## Properties

### list

• **list**: [`OnDuty`](OnDuty.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.OnDuty list = 1;

#### Defined in

[src/on_duties.scailo_pb.ts:648](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L648)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/on_duties.scailo_pb.ts:657](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L657)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/on_duties.scailo_pb.ts:655](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L655)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OnDutiesList"``

#### Defined in

[src/on_duties.scailo_pb.ts:656](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L656)

## Methods

### clone

▸ **clone**(): [`OnDutiesList`](OnDutiesList.md)

Create a deep copy.

#### Returns

[`OnDutiesList`](OnDutiesList.md)

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
| `other` | `undefined` \| ``null`` \| [`OnDutiesList`](OnDutiesList.md) \| `PlainMessage`\<[`OnDutiesList`](OnDutiesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`OnDutiesList`](OnDutiesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OnDutiesList`](OnDutiesList.md)\>

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
| `a` | `undefined` \| [`OnDutiesList`](OnDutiesList.md) \| `PlainMessage`\<[`OnDutiesList`](OnDutiesList.md)\> |
| `b` | `undefined` \| [`OnDutiesList`](OnDutiesList.md) \| `PlainMessage`\<[`OnDutiesList`](OnDutiesList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/on_duties.scailo_pb.ts:673](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L673)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OnDutiesList`](OnDutiesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OnDutiesList`](OnDutiesList.md)

#### Defined in

[src/on_duties.scailo_pb.ts:661](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L661)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OnDutiesList`](OnDutiesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OnDutiesList`](OnDutiesList.md)

#### Defined in

[src/on_duties.scailo_pb.ts:665](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L665)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OnDutiesList`](OnDutiesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OnDutiesList`](OnDutiesList.md)

#### Defined in

[src/on_duties.scailo_pb.ts:669](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/on_duties.scailo_pb.ts#L669)
