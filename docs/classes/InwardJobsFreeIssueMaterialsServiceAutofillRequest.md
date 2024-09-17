[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsFreeIssueMaterialsServiceAutofillRequest

# Class: InwardJobsFreeIssueMaterialsServiceAutofillRequest

Describes the parameters necessary to perform an autofill request

**`Generated`**

from message Scailo.InwardJobsFreeIssueMaterialsServiceAutofillRequest

## Hierarchy

- `Message`\<[`InwardJobsFreeIssueMaterialsServiceAutofillRequest`](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md)\>

  ↳ **`InwardJobsFreeIssueMaterialsServiceAutofillRequest`**

## Table of contents

### Constructors

- [constructor](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md#constructor)

### Properties

- [id](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md#id)
- [userComment](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md#usercomment)
- [fields](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md#fields)
- [runtime](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md#runtime)
- [typeName](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md#typename)

### Methods

- [clone](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md#clone)
- [equals](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md#equals)
- [fromBinary](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md#frombinary)
- [fromJson](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md#fromjson)
- [fromJsonString](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md#fromjsonstring)
- [getType](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md#gettype)
- [toBinary](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md#tobinary)
- [toJSON](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md#tojson)
- [toJson](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md#tojson-1)
- [toJsonString](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md#tojsonstring)
- [equals](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md#equals-1)
- [fromBinary](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md#frombinary-1)
- [fromJson](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md#fromjson-1)
- [fromJsonString](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsFreeIssueMaterialsServiceAutofillRequest**(`data?`): [`InwardJobsFreeIssueMaterialsServiceAutofillRequest`](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsFreeIssueMaterialsServiceAutofillRequest`](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md)\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceAutofillRequest`](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md)

#### Overrides

Message\&lt;InwardJobsFreeIssueMaterialsServiceAutofillRequest\&gt;.constructor

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:421

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:419

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:412

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:428

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:426

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsFreeIssueMaterialsServiceAutofillRequest"``

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:427

## Methods

### clone

▸ **clone**(): [`InwardJobsFreeIssueMaterialsServiceAutofillRequest`](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md)

Create a deep copy.

#### Returns

[`InwardJobsFreeIssueMaterialsServiceAutofillRequest`](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsFreeIssueMaterialsServiceAutofillRequest`](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsServiceAutofillRequest`](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsFreeIssueMaterialsServiceAutofillRequest`](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsFreeIssueMaterialsServiceAutofillRequest`](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md)\>

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
| `a` | `undefined` \| [`InwardJobsFreeIssueMaterialsServiceAutofillRequest`](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsServiceAutofillRequest`](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md)\> |
| `b` | `undefined` \| [`InwardJobsFreeIssueMaterialsServiceAutofillRequest`](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsServiceAutofillRequest`](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:445

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsFreeIssueMaterialsServiceAutofillRequest`](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceAutofillRequest`](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:433

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsFreeIssueMaterialsServiceAutofillRequest`](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceAutofillRequest`](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:437

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsFreeIssueMaterialsServiceAutofillRequest`](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsServiceAutofillRequest`](InwardJobsFreeIssueMaterialsServiceAutofillRequest.md)

#### Defined in

src/inward_jobs_free_issue_materials.scailo_pb.ts:441
