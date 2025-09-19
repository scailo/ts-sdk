[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndentsServiceAutofillRequest

# Class: ReplaceableIndentsServiceAutofillRequest

Describes the parameters necessary to perform an autofill request

**`Generated`**

from message Scailo.ReplaceableIndentsServiceAutofillRequest

## Hierarchy

- `Message`\<[`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)\>

  ↳ **`ReplaceableIndentsServiceAutofillRequest`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndentsServiceAutofillRequest.md#constructor)

### Properties

- [populateUsingEquationDependencies](ReplaceableIndentsServiceAutofillRequest.md#populateusingequationdependencies)
- [userComment](ReplaceableIndentsServiceAutofillRequest.md#usercomment)
- [uuid](ReplaceableIndentsServiceAutofillRequest.md#uuid)
- [fields](ReplaceableIndentsServiceAutofillRequest.md#fields)
- [runtime](ReplaceableIndentsServiceAutofillRequest.md#runtime)
- [typeName](ReplaceableIndentsServiceAutofillRequest.md#typename)

### Methods

- [clone](ReplaceableIndentsServiceAutofillRequest.md#clone)
- [equals](ReplaceableIndentsServiceAutofillRequest.md#equals)
- [fromBinary](ReplaceableIndentsServiceAutofillRequest.md#frombinary)
- [fromJson](ReplaceableIndentsServiceAutofillRequest.md#fromjson)
- [fromJsonString](ReplaceableIndentsServiceAutofillRequest.md#fromjsonstring)
- [getType](ReplaceableIndentsServiceAutofillRequest.md#gettype)
- [toBinary](ReplaceableIndentsServiceAutofillRequest.md#tobinary)
- [toJSON](ReplaceableIndentsServiceAutofillRequest.md#tojson)
- [toJson](ReplaceableIndentsServiceAutofillRequest.md#tojson-1)
- [toJsonString](ReplaceableIndentsServiceAutofillRequest.md#tojsonstring)
- [equals](ReplaceableIndentsServiceAutofillRequest.md#equals-1)
- [fromBinary](ReplaceableIndentsServiceAutofillRequest.md#frombinary-1)
- [fromJson](ReplaceableIndentsServiceAutofillRequest.md#fromjson-1)
- [fromJsonString](ReplaceableIndentsServiceAutofillRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndentsServiceAutofillRequest**(`data?`): [`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)\> |

#### Returns

[`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)

#### Overrides

Message\&lt;ReplaceableIndentsServiceAutofillRequest\&gt;.constructor

#### Defined in

[src/replaceable_indents.scailo_pb.ts:452](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L452)

## Properties

### populateUsingEquationDependencies

• **populateUsingEquationDependencies**: `boolean` = `false`

Denotes if all the equation dependencies (if applicable) should also be automatically added to the replaceable indent

**`Generated`**

from field: bool populate_using_equation_dependencies = 3;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:450](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L450)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:436](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L436)

___

### uuid

• **uuid**: `string` = `""`

The UUID of the record that needs to be updated

**`Generated`**

from field: string uuid = 2;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:443](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L443)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:459](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L459)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:457](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L457)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ReplaceableIndentsServiceAutofillRequest"``

#### Defined in

[src/replaceable_indents.scailo_pb.ts:458](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L458)

## Methods

### clone

▸ **clone**(): [`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)

Create a deep copy.

#### Returns

[`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md) \| `PlainMessage`\<[`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md) \| `PlainMessage`\<[`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)\> |
| `b` | `undefined` \| [`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md) \| `PlainMessage`\<[`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:477](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L477)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:465](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L465)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:469](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L469)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceAutofillRequest`](ReplaceableIndentsServiceAutofillRequest.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:473](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L473)
