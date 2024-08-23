[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivityTagAssociationsList

# Class: ActivityTagAssociationsList

Describes the message consisting of the list of activity tag associations

**`Generated`**

from message Scailo.ActivityTagAssociationsList

## Hierarchy

- `Message`\<[`ActivityTagAssociationsList`](ActivityTagAssociationsList.md)\>

  ↳ **`ActivityTagAssociationsList`**

## Table of contents

### Constructors

- [constructor](ActivityTagAssociationsList.md#constructor)

### Properties

- [list](ActivityTagAssociationsList.md#list)
- [fields](ActivityTagAssociationsList.md#fields)
- [runtime](ActivityTagAssociationsList.md#runtime)
- [typeName](ActivityTagAssociationsList.md#typename)

### Methods

- [clone](ActivityTagAssociationsList.md#clone)
- [equals](ActivityTagAssociationsList.md#equals)
- [fromBinary](ActivityTagAssociationsList.md#frombinary)
- [fromJson](ActivityTagAssociationsList.md#fromjson)
- [fromJsonString](ActivityTagAssociationsList.md#fromjsonstring)
- [getType](ActivityTagAssociationsList.md#gettype)
- [toBinary](ActivityTagAssociationsList.md#tobinary)
- [toJSON](ActivityTagAssociationsList.md#tojson)
- [toJson](ActivityTagAssociationsList.md#tojson-1)
- [toJsonString](ActivityTagAssociationsList.md#tojsonstring)
- [equals](ActivityTagAssociationsList.md#equals-1)
- [fromBinary](ActivityTagAssociationsList.md#frombinary-1)
- [fromJson](ActivityTagAssociationsList.md#fromjson-1)
- [fromJsonString](ActivityTagAssociationsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivityTagAssociationsList**(`data?`): [`ActivityTagAssociationsList`](ActivityTagAssociationsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivityTagAssociationsList`](ActivityTagAssociationsList.md)\> |

#### Returns

[`ActivityTagAssociationsList`](ActivityTagAssociationsList.md)

#### Overrides

Message\&lt;ActivityTagAssociationsList\&gt;.constructor

#### Defined in

src/activities.scailo_pb.ts:2513

## Properties

### list

• **list**: [`ActivityTagAssociation`](ActivityTagAssociation.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.ActivityTagAssociation list = 1;

#### Defined in

src/activities.scailo_pb.ts:2511

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities.scailo_pb.ts:2520

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities.scailo_pb.ts:2518

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivityTagAssociationsList"``

#### Defined in

src/activities.scailo_pb.ts:2519

## Methods

### clone

▸ **clone**(): [`ActivityTagAssociationsList`](ActivityTagAssociationsList.md)

Create a deep copy.

#### Returns

[`ActivityTagAssociationsList`](ActivityTagAssociationsList.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivityTagAssociationsList`](ActivityTagAssociationsList.md) \| `PlainMessage`\<[`ActivityTagAssociationsList`](ActivityTagAssociationsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivityTagAssociationsList`](ActivityTagAssociationsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivityTagAssociationsList`](ActivityTagAssociationsList.md)\>

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
| `a` | `undefined` \| [`ActivityTagAssociationsList`](ActivityTagAssociationsList.md) \| `PlainMessage`\<[`ActivityTagAssociationsList`](ActivityTagAssociationsList.md)\> |
| `b` | `undefined` \| [`ActivityTagAssociationsList`](ActivityTagAssociationsList.md) \| `PlainMessage`\<[`ActivityTagAssociationsList`](ActivityTagAssociationsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities.scailo_pb.ts:2536

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivityTagAssociationsList`](ActivityTagAssociationsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivityTagAssociationsList`](ActivityTagAssociationsList.md)

#### Defined in

src/activities.scailo_pb.ts:2524

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivityTagAssociationsList`](ActivityTagAssociationsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityTagAssociationsList`](ActivityTagAssociationsList.md)

#### Defined in

src/activities.scailo_pb.ts:2528

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivityTagAssociationsList`](ActivityTagAssociationsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityTagAssociationsList`](ActivityTagAssociationsList.md)

#### Defined in

src/activities.scailo_pb.ts:2532
