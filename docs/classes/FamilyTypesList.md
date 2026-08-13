[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamilyTypesList

# Class: FamilyTypesList

Represents a collection payload encapsulating multiple family type classifications.
This message is commonly utilized in bulk retrieval responses or as a multi-select filter array.

**`Generated`**

from message Scailo.FamilyTypesList

## Hierarchy

- `Message`\<[`FamilyTypesList`](FamilyTypesList.md)\>

  ↳ **`FamilyTypesList`**

## Table of contents

### Constructors

- [constructor](FamilyTypesList.md#constructor)

### Properties

- [list](FamilyTypesList.md#list)
- [fields](FamilyTypesList.md#fields)
- [runtime](FamilyTypesList.md#runtime)
- [typeName](FamilyTypesList.md#typename)

### Methods

- [clone](FamilyTypesList.md#clone)
- [equals](FamilyTypesList.md#equals)
- [fromBinary](FamilyTypesList.md#frombinary)
- [fromJson](FamilyTypesList.md#fromjson)
- [fromJsonString](FamilyTypesList.md#fromjsonstring)
- [getType](FamilyTypesList.md#gettype)
- [toBinary](FamilyTypesList.md#tobinary)
- [toJSON](FamilyTypesList.md#tojson)
- [toJson](FamilyTypesList.md#tojson-1)
- [toJsonString](FamilyTypesList.md#tojsonstring)
- [equals](FamilyTypesList.md#equals-1)
- [fromBinary](FamilyTypesList.md#frombinary-1)
- [fromJson](FamilyTypesList.md#fromjson-1)
- [fromJsonString](FamilyTypesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new FamilyTypesList**(`data?`): [`FamilyTypesList`](FamilyTypesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FamilyTypesList`](FamilyTypesList.md)\> |

#### Returns

[`FamilyTypesList`](FamilyTypesList.md)

#### Overrides

Message\&lt;FamilyTypesList\&gt;.constructor

#### Defined in

[src/families.scailo_pb.ts:277](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L277)

## Properties

### list

• **list**: [`FAMILY_TYPE`](../enums/FAMILY_TYPE.md)[] = `[]`

**`Optional`**

**`Description`**

An array containing one or more specific family type classifications.

**`Example`**

```ts
["FAMILY_TYPE_COMPONENT", "FAMILY_TYPE_MERCHANDISE"]
```

**`Format`**

Repeated array of valid FAMILY_TYPE enum strings or integer values.

**`Generated`**

from field: repeated Scailo.FAMILY_TYPE list = 1;

#### Defined in

[src/families.scailo_pb.ts:275](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L275)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/families.scailo_pb.ts:284](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L284)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/families.scailo_pb.ts:282](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L282)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamilyTypesList"``

#### Defined in

[src/families.scailo_pb.ts:283](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L283)

## Methods

### clone

▸ **clone**(): [`FamilyTypesList`](FamilyTypesList.md)

Create a deep copy.

#### Returns

[`FamilyTypesList`](FamilyTypesList.md)

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
| `other` | `undefined` \| ``null`` \| [`FamilyTypesList`](FamilyTypesList.md) \| `PlainMessage`\<[`FamilyTypesList`](FamilyTypesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`FamilyTypesList`](FamilyTypesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FamilyTypesList`](FamilyTypesList.md)\>

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
| `a` | `undefined` \| [`FamilyTypesList`](FamilyTypesList.md) \| `PlainMessage`\<[`FamilyTypesList`](FamilyTypesList.md)\> |
| `b` | `undefined` \| [`FamilyTypesList`](FamilyTypesList.md) \| `PlainMessage`\<[`FamilyTypesList`](FamilyTypesList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/families.scailo_pb.ts:300](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L300)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FamilyTypesList`](FamilyTypesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FamilyTypesList`](FamilyTypesList.md)

#### Defined in

[src/families.scailo_pb.ts:288](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L288)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FamilyTypesList`](FamilyTypesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamilyTypesList`](FamilyTypesList.md)

#### Defined in

[src/families.scailo_pb.ts:292](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L292)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FamilyTypesList`](FamilyTypesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamilyTypesList`](FamilyTypesList.md)

#### Defined in

[src/families.scailo_pb.ts:296](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/families.scailo_pb.ts#L296)
