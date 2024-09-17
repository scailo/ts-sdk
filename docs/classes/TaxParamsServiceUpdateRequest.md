[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TaxParamsServiceUpdateRequest

# Class: TaxParamsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.TaxParamsServiceUpdateRequest

## Hierarchy

- `Message`\<[`TaxParamsServiceUpdateRequest`](TaxParamsServiceUpdateRequest.md)\>

  ↳ **`TaxParamsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](TaxParamsServiceUpdateRequest.md#constructor)

### Properties

- [description](TaxParamsServiceUpdateRequest.md#description)
- [id](TaxParamsServiceUpdateRequest.md#id)
- [name](TaxParamsServiceUpdateRequest.md#name)
- [notifyUsers](TaxParamsServiceUpdateRequest.md#notifyusers)
- [userComment](TaxParamsServiceUpdateRequest.md#usercomment)
- [fields](TaxParamsServiceUpdateRequest.md#fields)
- [runtime](TaxParamsServiceUpdateRequest.md#runtime)
- [typeName](TaxParamsServiceUpdateRequest.md#typename)

### Methods

- [clone](TaxParamsServiceUpdateRequest.md#clone)
- [equals](TaxParamsServiceUpdateRequest.md#equals)
- [fromBinary](TaxParamsServiceUpdateRequest.md#frombinary)
- [fromJson](TaxParamsServiceUpdateRequest.md#fromjson)
- [fromJsonString](TaxParamsServiceUpdateRequest.md#fromjsonstring)
- [getType](TaxParamsServiceUpdateRequest.md#gettype)
- [toBinary](TaxParamsServiceUpdateRequest.md#tobinary)
- [toJSON](TaxParamsServiceUpdateRequest.md#tojson)
- [toJson](TaxParamsServiceUpdateRequest.md#tojson-1)
- [toJsonString](TaxParamsServiceUpdateRequest.md#tojsonstring)
- [equals](TaxParamsServiceUpdateRequest.md#equals-1)
- [fromBinary](TaxParamsServiceUpdateRequest.md#frombinary-1)
- [fromJson](TaxParamsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](TaxParamsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new TaxParamsServiceUpdateRequest**(`data?`): [`TaxParamsServiceUpdateRequest`](TaxParamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TaxParamsServiceUpdateRequest`](TaxParamsServiceUpdateRequest.md)\> |

#### Returns

[`TaxParamsServiceUpdateRequest`](TaxParamsServiceUpdateRequest.md)

#### Overrides

Message\&lt;TaxParamsServiceUpdateRequest\&gt;.constructor

#### Defined in

src/tax_params.scailo_pb.ts:327

## Properties

### description

• **description**: `string` = `""`

The description of the tax param

**`Generated`**

from field: string description = 20;

#### Defined in

src/tax_params.scailo_pb.ts:325

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/tax_params.scailo_pb.ts:304

___

### name

• **name**: `string` = `""`

The name of the tax param

**`Generated`**

from field: string name = 10;

#### Defined in

src/tax_params.scailo_pb.ts:318

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that denotes if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

src/tax_params.scailo_pb.ts:311

___

### userComment

• **userComment**: `string` = `""`

TaxParams any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/tax_params.scailo_pb.ts:297

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/tax_params.scailo_pb.ts:334

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/tax_params.scailo_pb.ts:332

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TaxParamsServiceUpdateRequest"``

#### Defined in

src/tax_params.scailo_pb.ts:333

## Methods

### clone

▸ **clone**(): [`TaxParamsServiceUpdateRequest`](TaxParamsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`TaxParamsServiceUpdateRequest`](TaxParamsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`TaxParamsServiceUpdateRequest`](TaxParamsServiceUpdateRequest.md) \| `PlainMessage`\<[`TaxParamsServiceUpdateRequest`](TaxParamsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`TaxParamsServiceUpdateRequest`](TaxParamsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TaxParamsServiceUpdateRequest`](TaxParamsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`TaxParamsServiceUpdateRequest`](TaxParamsServiceUpdateRequest.md) \| `PlainMessage`\<[`TaxParamsServiceUpdateRequest`](TaxParamsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`TaxParamsServiceUpdateRequest`](TaxParamsServiceUpdateRequest.md) \| `PlainMessage`\<[`TaxParamsServiceUpdateRequest`](TaxParamsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/tax_params.scailo_pb.ts:354

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TaxParamsServiceUpdateRequest`](TaxParamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TaxParamsServiceUpdateRequest`](TaxParamsServiceUpdateRequest.md)

#### Defined in

src/tax_params.scailo_pb.ts:342

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TaxParamsServiceUpdateRequest`](TaxParamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxParamsServiceUpdateRequest`](TaxParamsServiceUpdateRequest.md)

#### Defined in

src/tax_params.scailo_pb.ts:346

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TaxParamsServiceUpdateRequest`](TaxParamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxParamsServiceUpdateRequest`](TaxParamsServiceUpdateRequest.md)

#### Defined in

src/tax_params.scailo_pb.ts:350
