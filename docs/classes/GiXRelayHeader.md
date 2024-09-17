[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GiXRelayHeader

# Class: GiXRelayHeader

Describes the message that stores the headers necessary for performing the RELAY request

**`Generated`**

from message Scailo.GiXRelayHeader

## Hierarchy

- `Message`\<[`GiXRelayHeader`](GiXRelayHeader.md)\>

  ↳ **`GiXRelayHeader`**

## Table of contents

### Constructors

- [constructor](GiXRelayHeader.md#constructor)

### Properties

- [name](GiXRelayHeader.md#name)
- [value](GiXRelayHeader.md#value)
- [fields](GiXRelayHeader.md#fields)
- [runtime](GiXRelayHeader.md#runtime)
- [typeName](GiXRelayHeader.md#typename)

### Methods

- [clone](GiXRelayHeader.md#clone)
- [equals](GiXRelayHeader.md#equals)
- [fromBinary](GiXRelayHeader.md#frombinary)
- [fromJson](GiXRelayHeader.md#fromjson)
- [fromJsonString](GiXRelayHeader.md#fromjsonstring)
- [getType](GiXRelayHeader.md#gettype)
- [toBinary](GiXRelayHeader.md#tobinary)
- [toJSON](GiXRelayHeader.md#tojson)
- [toJson](GiXRelayHeader.md#tojson-1)
- [toJsonString](GiXRelayHeader.md#tojsonstring)
- [equals](GiXRelayHeader.md#equals-1)
- [fromBinary](GiXRelayHeader.md#frombinary-1)
- [fromJson](GiXRelayHeader.md#fromjson-1)
- [fromJsonString](GiXRelayHeader.md#fromjsonstring-1)

## Constructors

### constructor

• **new GiXRelayHeader**(`data?`): [`GiXRelayHeader`](GiXRelayHeader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GiXRelayHeader`](GiXRelayHeader.md)\> |

#### Returns

[`GiXRelayHeader`](GiXRelayHeader.md)

#### Overrides

Message\&lt;GiXRelayHeader\&gt;.constructor

#### Defined in

src/vault_services.scailo_pb.ts:82

## Properties

### name

• **name**: `string` = `""`

The name of the header

**`Generated`**

from field: string name = 1;

#### Defined in

src/vault_services.scailo_pb.ts:73

___

### value

• **value**: `string` = `""`

The value of the header

**`Generated`**

from field: string value = 2;

#### Defined in

src/vault_services.scailo_pb.ts:80

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vault_services.scailo_pb.ts:89

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vault_services.scailo_pb.ts:87

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GiXRelayHeader"``

#### Defined in

src/vault_services.scailo_pb.ts:88

## Methods

### clone

▸ **clone**(): [`GiXRelayHeader`](GiXRelayHeader.md)

Create a deep copy.

#### Returns

[`GiXRelayHeader`](GiXRelayHeader.md)

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
| `other` | `undefined` \| ``null`` \| [`GiXRelayHeader`](GiXRelayHeader.md) \| `PlainMessage`\<[`GiXRelayHeader`](GiXRelayHeader.md)\> |

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

▸ **getType**(): `MessageType`\<[`GiXRelayHeader`](GiXRelayHeader.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GiXRelayHeader`](GiXRelayHeader.md)\>

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
| `a` | `undefined` \| [`GiXRelayHeader`](GiXRelayHeader.md) \| `PlainMessage`\<[`GiXRelayHeader`](GiXRelayHeader.md)\> |
| `b` | `undefined` \| [`GiXRelayHeader`](GiXRelayHeader.md) \| `PlainMessage`\<[`GiXRelayHeader`](GiXRelayHeader.md)\> |

#### Returns

`boolean`

#### Defined in

src/vault_services.scailo_pb.ts:106

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GiXRelayHeader`](GiXRelayHeader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GiXRelayHeader`](GiXRelayHeader.md)

#### Defined in

src/vault_services.scailo_pb.ts:94

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GiXRelayHeader`](GiXRelayHeader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GiXRelayHeader`](GiXRelayHeader.md)

#### Defined in

src/vault_services.scailo_pb.ts:98

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GiXRelayHeader`](GiXRelayHeader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GiXRelayHeader`](GiXRelayHeader.md)

#### Defined in

src/vault_services.scailo_pb.ts:102
