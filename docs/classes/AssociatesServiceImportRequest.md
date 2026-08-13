[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AssociatesServiceImportRequest

# Class: AssociatesServiceImportRequest

Describes the necessary data structure to import a list of associates

**`Generated`**

from message Scailo.AssociatesServiceImportRequest

## Hierarchy

- `Message`\<[`AssociatesServiceImportRequest`](AssociatesServiceImportRequest.md)\>

  ↳ **`AssociatesServiceImportRequest`**

## Table of contents

### Constructors

- [constructor](AssociatesServiceImportRequest.md#constructor)

### Properties

- [list](AssociatesServiceImportRequest.md#list)
- [userComment](AssociatesServiceImportRequest.md#usercomment)
- [fields](AssociatesServiceImportRequest.md#fields)
- [runtime](AssociatesServiceImportRequest.md#runtime)
- [typeName](AssociatesServiceImportRequest.md#typename)

### Methods

- [clone](AssociatesServiceImportRequest.md#clone)
- [equals](AssociatesServiceImportRequest.md#equals)
- [fromBinary](AssociatesServiceImportRequest.md#frombinary)
- [fromJson](AssociatesServiceImportRequest.md#fromjson)
- [fromJsonString](AssociatesServiceImportRequest.md#fromjsonstring)
- [getType](AssociatesServiceImportRequest.md#gettype)
- [toBinary](AssociatesServiceImportRequest.md#tobinary)
- [toJSON](AssociatesServiceImportRequest.md#tojson)
- [toJson](AssociatesServiceImportRequest.md#tojson-1)
- [toJsonString](AssociatesServiceImportRequest.md#tojsonstring)
- [equals](AssociatesServiceImportRequest.md#equals-1)
- [fromBinary](AssociatesServiceImportRequest.md#frombinary-1)
- [fromJson](AssociatesServiceImportRequest.md#fromjson-1)
- [fromJsonString](AssociatesServiceImportRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssociatesServiceImportRequest**(`data?`): [`AssociatesServiceImportRequest`](AssociatesServiceImportRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AssociatesServiceImportRequest`](AssociatesServiceImportRequest.md)\> |

#### Returns

[`AssociatesServiceImportRequest`](AssociatesServiceImportRequest.md)

#### Overrides

Message\&lt;AssociatesServiceImportRequest\&gt;.constructor

#### Defined in

[src/associates.scailo_pb.ts:862](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L862)

## Properties

### list

• **list**: [`AssociatesServiceCreateRequest`](AssociatesServiceCreateRequest.md)[] = `[]`

The list of associates that need to be imported

**`Generated`**

from field: repeated Scailo.AssociatesServiceCreateRequest list = 10;

#### Defined in

[src/associates.scailo_pb.ts:860](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L860)

___

### userComment

• `Optional` **userComment**: `string`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string user_comment = 1;

#### Defined in

[src/associates.scailo_pb.ts:853](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L853)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/associates.scailo_pb.ts:869](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L869)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/associates.scailo_pb.ts:867](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L867)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssociatesServiceImportRequest"``

#### Defined in

[src/associates.scailo_pb.ts:868](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L868)

## Methods

### clone

▸ **clone**(): [`AssociatesServiceImportRequest`](AssociatesServiceImportRequest.md)

Create a deep copy.

#### Returns

[`AssociatesServiceImportRequest`](AssociatesServiceImportRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`AssociatesServiceImportRequest`](AssociatesServiceImportRequest.md) \| `PlainMessage`\<[`AssociatesServiceImportRequest`](AssociatesServiceImportRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`AssociatesServiceImportRequest`](AssociatesServiceImportRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AssociatesServiceImportRequest`](AssociatesServiceImportRequest.md)\>

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
| `a` | `undefined` \| [`AssociatesServiceImportRequest`](AssociatesServiceImportRequest.md) \| `PlainMessage`\<[`AssociatesServiceImportRequest`](AssociatesServiceImportRequest.md)\> |
| `b` | `undefined` \| [`AssociatesServiceImportRequest`](AssociatesServiceImportRequest.md) \| `PlainMessage`\<[`AssociatesServiceImportRequest`](AssociatesServiceImportRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/associates.scailo_pb.ts:886](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L886)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssociatesServiceImportRequest`](AssociatesServiceImportRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AssociatesServiceImportRequest`](AssociatesServiceImportRequest.md)

#### Defined in

[src/associates.scailo_pb.ts:874](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L874)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssociatesServiceImportRequest`](AssociatesServiceImportRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssociatesServiceImportRequest`](AssociatesServiceImportRequest.md)

#### Defined in

[src/associates.scailo_pb.ts:878](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L878)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssociatesServiceImportRequest`](AssociatesServiceImportRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssociatesServiceImportRequest`](AssociatesServiceImportRequest.md)

#### Defined in

[src/associates.scailo_pb.ts:882](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L882)
