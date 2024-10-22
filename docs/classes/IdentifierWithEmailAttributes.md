[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / IdentifierWithEmailAttributes

# Class: IdentifierWithEmailAttributes

Describes the standard identifier with email attributes. Useful when a record (identified by the identifier) needs to be mailed with the given subject, and the list of email addresses.

**`Generated`**

from message Scailo.IdentifierWithEmailAttributes

## Hierarchy

- `Message`\<[`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)\>

  ↳ **`IdentifierWithEmailAttributes`**

## Table of contents

### Constructors

- [constructor](IdentifierWithEmailAttributes.md#constructor)

### Properties

- [body](IdentifierWithEmailAttributes.md#body)
- [id](IdentifierWithEmailAttributes.md#id)
- [recipients](IdentifierWithEmailAttributes.md#recipients)
- [subject](IdentifierWithEmailAttributes.md#subject)
- [fields](IdentifierWithEmailAttributes.md#fields)
- [runtime](IdentifierWithEmailAttributes.md#runtime)
- [typeName](IdentifierWithEmailAttributes.md#typename)

### Methods

- [clone](IdentifierWithEmailAttributes.md#clone)
- [equals](IdentifierWithEmailAttributes.md#equals)
- [fromBinary](IdentifierWithEmailAttributes.md#frombinary)
- [fromJson](IdentifierWithEmailAttributes.md#fromjson)
- [fromJsonString](IdentifierWithEmailAttributes.md#fromjsonstring)
- [getType](IdentifierWithEmailAttributes.md#gettype)
- [toBinary](IdentifierWithEmailAttributes.md#tobinary)
- [toJSON](IdentifierWithEmailAttributes.md#tojson)
- [toJson](IdentifierWithEmailAttributes.md#tojson-1)
- [toJsonString](IdentifierWithEmailAttributes.md#tojsonstring)
- [equals](IdentifierWithEmailAttributes.md#equals-1)
- [fromBinary](IdentifierWithEmailAttributes.md#frombinary-1)
- [fromJson](IdentifierWithEmailAttributes.md#fromjson-1)
- [fromJsonString](IdentifierWithEmailAttributes.md#fromjsonstring-1)

## Constructors

### constructor

• **new IdentifierWithEmailAttributes**(`data?`): [`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)\> |

#### Returns

[`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)

#### Overrides

Message\&lt;IdentifierWithEmailAttributes\&gt;.constructor

#### Defined in

src/base.scailo_pb.ts:2571

## Properties

### body

• **body**: `string` = `""`

The body of the email

**`Generated`**

from field: string body = 12;

#### Defined in

src/base.scailo_pb.ts:2569

___

### id

• **id**: `bigint` = `protoInt64.zero`

ID of the resource

**`Generated`**

from field: uint64 id = 1;

#### Defined in

src/base.scailo_pb.ts:2548

___

### recipients

• **recipients**: `string`[] = `[]`

The list of email addresses of the recipients

**`Generated`**

from field: repeated string recipients = 11;

#### Defined in

src/base.scailo_pb.ts:2562

___

### subject

• **subject**: `string` = `""`

The subject of the email

**`Generated`**

from field: string subject = 10;

#### Defined in

src/base.scailo_pb.ts:2555

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/base.scailo_pb.ts:2578

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/base.scailo_pb.ts:2576

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.IdentifierWithEmailAttributes"``

#### Defined in

src/base.scailo_pb.ts:2577

## Methods

### clone

▸ **clone**(): [`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)

Create a deep copy.

#### Returns

[`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)

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
| `other` | `undefined` \| ``null`` \| [`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md) \| `PlainMessage`\<[`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)\> |

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

▸ **getType**(): `MessageType`\<[`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)\>

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
| `a` | `undefined` \| [`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md) \| `PlainMessage`\<[`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)\> |
| `b` | `undefined` \| [`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md) \| `PlainMessage`\<[`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)\> |

#### Returns

`boolean`

#### Defined in

src/base.scailo_pb.ts:2597

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)

#### Defined in

src/base.scailo_pb.ts:2585

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)

#### Defined in

src/base.scailo_pb.ts:2589

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`IdentifierWithEmailAttributes`](IdentifierWithEmailAttributes.md)

#### Defined in

src/base.scailo_pb.ts:2593
