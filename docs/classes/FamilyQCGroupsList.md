[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / FamilyQCGroupsList

# Class: FamilyQCGroupsList

Describes the message consisting of the list of family qc groups

**`Generated`**

from message Scailo.FamilyQCGroupsList

## Hierarchy

- `Message`\<[`FamilyQCGroupsList`](FamilyQCGroupsList.md)\>

  ↳ **`FamilyQCGroupsList`**

## Table of contents

### Constructors

- [constructor](FamilyQCGroupsList.md#constructor)

### Properties

- [list](FamilyQCGroupsList.md#list)
- [fields](FamilyQCGroupsList.md#fields)
- [runtime](FamilyQCGroupsList.md#runtime)
- [typeName](FamilyQCGroupsList.md#typename)

### Methods

- [clone](FamilyQCGroupsList.md#clone)
- [equals](FamilyQCGroupsList.md#equals)
- [fromBinary](FamilyQCGroupsList.md#frombinary)
- [fromJson](FamilyQCGroupsList.md#fromjson)
- [fromJsonString](FamilyQCGroupsList.md#fromjsonstring)
- [getType](FamilyQCGroupsList.md#gettype)
- [toBinary](FamilyQCGroupsList.md#tobinary)
- [toJSON](FamilyQCGroupsList.md#tojson)
- [toJson](FamilyQCGroupsList.md#tojson-1)
- [toJsonString](FamilyQCGroupsList.md#tojsonstring)
- [equals](FamilyQCGroupsList.md#equals-1)
- [fromBinary](FamilyQCGroupsList.md#frombinary-1)
- [fromJson](FamilyQCGroupsList.md#fromjson-1)
- [fromJsonString](FamilyQCGroupsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new FamilyQCGroupsList**(`data?`): [`FamilyQCGroupsList`](FamilyQCGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FamilyQCGroupsList`](FamilyQCGroupsList.md)\> |

#### Returns

[`FamilyQCGroupsList`](FamilyQCGroupsList.md)

#### Overrides

Message\&lt;FamilyQCGroupsList\&gt;.constructor

#### Defined in

src/families.scailo_pb.ts:2359

## Properties

### list

• **list**: [`FamilyQCGroup`](FamilyQCGroup.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.FamilyQCGroup list = 1;

#### Defined in

src/families.scailo_pb.ts:2357

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/families.scailo_pb.ts:2366

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/families.scailo_pb.ts:2364

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamilyQCGroupsList"``

#### Defined in

src/families.scailo_pb.ts:2365

## Methods

### clone

▸ **clone**(): [`FamilyQCGroupsList`](FamilyQCGroupsList.md)

Create a deep copy.

#### Returns

[`FamilyQCGroupsList`](FamilyQCGroupsList.md)

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
| `other` | `undefined` \| ``null`` \| [`FamilyQCGroupsList`](FamilyQCGroupsList.md) \| `PlainMessage`\<[`FamilyQCGroupsList`](FamilyQCGroupsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`FamilyQCGroupsList`](FamilyQCGroupsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FamilyQCGroupsList`](FamilyQCGroupsList.md)\>

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
| `a` | `undefined` \| [`FamilyQCGroupsList`](FamilyQCGroupsList.md) \| `PlainMessage`\<[`FamilyQCGroupsList`](FamilyQCGroupsList.md)\> |
| `b` | `undefined` \| [`FamilyQCGroupsList`](FamilyQCGroupsList.md) \| `PlainMessage`\<[`FamilyQCGroupsList`](FamilyQCGroupsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/families.scailo_pb.ts:2382

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FamilyQCGroupsList`](FamilyQCGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FamilyQCGroupsList`](FamilyQCGroupsList.md)

#### Defined in

src/families.scailo_pb.ts:2370

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FamilyQCGroupsList`](FamilyQCGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamilyQCGroupsList`](FamilyQCGroupsList.md)

#### Defined in

src/families.scailo_pb.ts:2374

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FamilyQCGroupsList`](FamilyQCGroupsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamilyQCGroupsList`](FamilyQCGroupsList.md)

#### Defined in

src/families.scailo_pb.ts:2378
