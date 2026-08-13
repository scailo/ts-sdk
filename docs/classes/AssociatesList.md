[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AssociatesList

# Class: AssociatesList

Container message for a collection of Associate records.

**`Generated`**

from message Scailo.AssociatesList

## Hierarchy

- `Message`\<[`AssociatesList`](AssociatesList.md)\>

  ↳ **`AssociatesList`**

## Table of contents

### Constructors

- [constructor](AssociatesList.md#constructor)

### Properties

- [list](AssociatesList.md#list)
- [fields](AssociatesList.md#fields)
- [runtime](AssociatesList.md#runtime)
- [typeName](AssociatesList.md#typename)

### Methods

- [clone](AssociatesList.md#clone)
- [equals](AssociatesList.md#equals)
- [fromBinary](AssociatesList.md#frombinary)
- [fromJson](AssociatesList.md#fromjson)
- [fromJsonString](AssociatesList.md#fromjsonstring)
- [getType](AssociatesList.md#gettype)
- [toBinary](AssociatesList.md#tobinary)
- [toJSON](AssociatesList.md#tojson)
- [toJson](AssociatesList.md#tojson-1)
- [toJsonString](AssociatesList.md#tojsonstring)
- [equals](AssociatesList.md#equals-1)
- [fromBinary](AssociatesList.md#frombinary-1)
- [fromJson](AssociatesList.md#fromjson-1)
- [fromJsonString](AssociatesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssociatesList**(`data?`): [`AssociatesList`](AssociatesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AssociatesList`](AssociatesList.md)\> |

#### Returns

[`AssociatesList`](AssociatesList.md)

#### Overrides

Message\&lt;AssociatesList\&gt;.constructor

#### Defined in

[src/associates.scailo_pb.ts:386](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L386)

## Properties

### list

• **list**: [`Associate`](Associate.md)[] = `[]`

**`Description`**

An array of Associate records.

**`Generated`**

from field: repeated Scailo.Associate list = 1;

#### Defined in

[src/associates.scailo_pb.ts:384](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L384)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/associates.scailo_pb.ts:393](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L393)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/associates.scailo_pb.ts:391](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L391)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssociatesList"``

#### Defined in

[src/associates.scailo_pb.ts:392](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L392)

## Methods

### clone

▸ **clone**(): [`AssociatesList`](AssociatesList.md)

Create a deep copy.

#### Returns

[`AssociatesList`](AssociatesList.md)

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
| `other` | `undefined` \| ``null`` \| [`AssociatesList`](AssociatesList.md) \| `PlainMessage`\<[`AssociatesList`](AssociatesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`AssociatesList`](AssociatesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AssociatesList`](AssociatesList.md)\>

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
| `a` | `undefined` \| [`AssociatesList`](AssociatesList.md) \| `PlainMessage`\<[`AssociatesList`](AssociatesList.md)\> |
| `b` | `undefined` \| [`AssociatesList`](AssociatesList.md) \| `PlainMessage`\<[`AssociatesList`](AssociatesList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/associates.scailo_pb.ts:409](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L409)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssociatesList`](AssociatesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AssociatesList`](AssociatesList.md)

#### Defined in

[src/associates.scailo_pb.ts:397](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L397)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssociatesList`](AssociatesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssociatesList`](AssociatesList.md)

#### Defined in

[src/associates.scailo_pb.ts:401](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L401)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssociatesList`](AssociatesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssociatesList`](AssociatesList.md)

#### Defined in

[src/associates.scailo_pb.ts:405](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L405)
