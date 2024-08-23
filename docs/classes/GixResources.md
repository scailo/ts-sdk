[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / GixResources

# Class: GixResources

Describes the resources section of a GiX app

**`Generated`**

from message Scailo.GixResources

## Hierarchy

- `Message`\<[`GixResources`](GixResources.md)\>

  ↳ **`GixResources`**

## Table of contents

### Constructors

- [constructor](GixResources.md#constructor)

### Properties

- [externalApis](GixResources.md#externalapis)
- [htmlEntry](GixResources.md#htmlentry)
- [logos](GixResources.md#logos)
- [fields](GixResources.md#fields)
- [runtime](GixResources.md#runtime)
- [typeName](GixResources.md#typename)

### Methods

- [clone](GixResources.md#clone)
- [equals](GixResources.md#equals)
- [fromBinary](GixResources.md#frombinary)
- [fromJson](GixResources.md#fromjson)
- [fromJsonString](GixResources.md#fromjsonstring)
- [getType](GixResources.md#gettype)
- [toBinary](GixResources.md#tobinary)
- [toJSON](GixResources.md#tojson)
- [toJson](GixResources.md#tojson-1)
- [toJsonString](GixResources.md#tojsonstring)
- [equals](GixResources.md#equals-1)
- [fromBinary](GixResources.md#frombinary-1)
- [fromJson](GixResources.md#fromjson-1)
- [fromJsonString](GixResources.md#fromjsonstring-1)

## Constructors

### constructor

• **new GixResources**(`data?`): [`GixResources`](GixResources.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GixResources`](GixResources.md)\> |

#### Returns

[`GixResources`](GixResources.md)

#### Overrides

Message\&lt;GixResources\&gt;.constructor

#### Defined in

src/vault_commons.scailo_pb.ts:496

## Properties

### externalApis

• **externalApis**: `string`[] = `[]`

Stores the list of external APIs that need to be accessible by the GiX app

**`Generated`**

from field: repeated string external_apis = 3 [json_name = "external_apis"];

#### Defined in

src/vault_commons.scailo_pb.ts:494

___

### htmlEntry

• **htmlEntry**: `string` = `""`

Stores the entry point of the GiX app

**`Generated`**

from field: string html_entry = 1 [json_name = "html_entry"];

#### Defined in

src/vault_commons.scailo_pb.ts:480

___

### logos

• **logos**: `string`[] = `[]`

Stores the list of logos that are available

**`Generated`**

from field: repeated string logos = 2;

#### Defined in

src/vault_commons.scailo_pb.ts:487

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vault_commons.scailo_pb.ts:503

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vault_commons.scailo_pb.ts:501

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GixResources"``

#### Defined in

src/vault_commons.scailo_pb.ts:502

## Methods

### clone

▸ **clone**(): [`GixResources`](GixResources.md)

Create a deep copy.

#### Returns

[`GixResources`](GixResources.md)

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
| `other` | `undefined` \| ``null`` \| [`GixResources`](GixResources.md) \| `PlainMessage`\<[`GixResources`](GixResources.md)\> |

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

▸ **getType**(): `MessageType`\<[`GixResources`](GixResources.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GixResources`](GixResources.md)\>

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
| `a` | `undefined` \| [`GixResources`](GixResources.md) \| `PlainMessage`\<[`GixResources`](GixResources.md)\> |
| `b` | `undefined` \| [`GixResources`](GixResources.md) \| `PlainMessage`\<[`GixResources`](GixResources.md)\> |

#### Returns

`boolean`

#### Defined in

src/vault_commons.scailo_pb.ts:521

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GixResources`](GixResources.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GixResources`](GixResources.md)

#### Defined in

src/vault_commons.scailo_pb.ts:509

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GixResources`](GixResources.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GixResources`](GixResources.md)

#### Defined in

src/vault_commons.scailo_pb.ts:513

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GixResources`](GixResources.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GixResources`](GixResources.md)

#### Defined in

src/vault_commons.scailo_pb.ts:517
