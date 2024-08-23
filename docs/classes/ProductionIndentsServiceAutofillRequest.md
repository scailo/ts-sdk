[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionIndentsServiceAutofillRequest

# Class: ProductionIndentsServiceAutofillRequest

Describes the parameters necessary to perform an autofill request

**`Generated`**

from message Scailo.ProductionIndentsServiceAutofillRequest

## Hierarchy

- `Message`\<[`ProductionIndentsServiceAutofillRequest`](ProductionIndentsServiceAutofillRequest.md)\>

  ↳ **`ProductionIndentsServiceAutofillRequest`**

## Table of contents

### Constructors

- [constructor](ProductionIndentsServiceAutofillRequest.md#constructor)

### Properties

- [id](ProductionIndentsServiceAutofillRequest.md#id)
- [populateUsingEquationDependencies](ProductionIndentsServiceAutofillRequest.md#populateusingequationdependencies)
- [userComment](ProductionIndentsServiceAutofillRequest.md#usercomment)
- [fields](ProductionIndentsServiceAutofillRequest.md#fields)
- [runtime](ProductionIndentsServiceAutofillRequest.md#runtime)
- [typeName](ProductionIndentsServiceAutofillRequest.md#typename)

### Methods

- [clone](ProductionIndentsServiceAutofillRequest.md#clone)
- [equals](ProductionIndentsServiceAutofillRequest.md#equals)
- [fromBinary](ProductionIndentsServiceAutofillRequest.md#frombinary)
- [fromJson](ProductionIndentsServiceAutofillRequest.md#fromjson)
- [fromJsonString](ProductionIndentsServiceAutofillRequest.md#fromjsonstring)
- [getType](ProductionIndentsServiceAutofillRequest.md#gettype)
- [toBinary](ProductionIndentsServiceAutofillRequest.md#tobinary)
- [toJSON](ProductionIndentsServiceAutofillRequest.md#tojson)
- [toJson](ProductionIndentsServiceAutofillRequest.md#tojson-1)
- [toJsonString](ProductionIndentsServiceAutofillRequest.md#tojsonstring)
- [equals](ProductionIndentsServiceAutofillRequest.md#equals-1)
- [fromBinary](ProductionIndentsServiceAutofillRequest.md#frombinary-1)
- [fromJson](ProductionIndentsServiceAutofillRequest.md#fromjson-1)
- [fromJsonString](ProductionIndentsServiceAutofillRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionIndentsServiceAutofillRequest**(`data?`): [`ProductionIndentsServiceAutofillRequest`](ProductionIndentsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionIndentsServiceAutofillRequest`](ProductionIndentsServiceAutofillRequest.md)\> |

#### Returns

[`ProductionIndentsServiceAutofillRequest`](ProductionIndentsServiceAutofillRequest.md)

#### Overrides

Message\&lt;ProductionIndentsServiceAutofillRequest\&gt;.constructor

#### Defined in

src/production_indents.scailo_pb.ts:452

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/production_indents.scailo_pb.ts:443

___

### populateUsingEquationDependencies

• **populateUsingEquationDependencies**: `boolean` = `false`

Denotes if all the equation dependencies (if applicable) should also be automatically added to the production indent

**`Generated`**

from field: bool populate_using_equation_dependencies = 3;

#### Defined in

src/production_indents.scailo_pb.ts:450

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/production_indents.scailo_pb.ts:436

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/production_indents.scailo_pb.ts:459

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/production_indents.scailo_pb.ts:457

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionIndentsServiceAutofillRequest"``

#### Defined in

src/production_indents.scailo_pb.ts:458

## Methods

### clone

▸ **clone**(): [`ProductionIndentsServiceAutofillRequest`](ProductionIndentsServiceAutofillRequest.md)

Create a deep copy.

#### Returns

[`ProductionIndentsServiceAutofillRequest`](ProductionIndentsServiceAutofillRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionIndentsServiceAutofillRequest`](ProductionIndentsServiceAutofillRequest.md) \| `PlainMessage`\<[`ProductionIndentsServiceAutofillRequest`](ProductionIndentsServiceAutofillRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionIndentsServiceAutofillRequest`](ProductionIndentsServiceAutofillRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionIndentsServiceAutofillRequest`](ProductionIndentsServiceAutofillRequest.md)\>

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
| `a` | `undefined` \| [`ProductionIndentsServiceAutofillRequest`](ProductionIndentsServiceAutofillRequest.md) \| `PlainMessage`\<[`ProductionIndentsServiceAutofillRequest`](ProductionIndentsServiceAutofillRequest.md)\> |
| `b` | `undefined` \| [`ProductionIndentsServiceAutofillRequest`](ProductionIndentsServiceAutofillRequest.md) \| `PlainMessage`\<[`ProductionIndentsServiceAutofillRequest`](ProductionIndentsServiceAutofillRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/production_indents.scailo_pb.ts:477

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionIndentsServiceAutofillRequest`](ProductionIndentsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionIndentsServiceAutofillRequest`](ProductionIndentsServiceAutofillRequest.md)

#### Defined in

src/production_indents.scailo_pb.ts:465

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionIndentsServiceAutofillRequest`](ProductionIndentsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceAutofillRequest`](ProductionIndentsServiceAutofillRequest.md)

#### Defined in

src/production_indents.scailo_pb.ts:469

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentsServiceAutofillRequest`](ProductionIndentsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceAutofillRequest`](ProductionIndentsServiceAutofillRequest.md)

#### Defined in

src/production_indents.scailo_pb.ts:473
