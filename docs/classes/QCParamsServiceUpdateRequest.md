[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCParamsServiceUpdateRequest

# Class: QCParamsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.QCParamsServiceUpdateRequest

## Hierarchy

- `Message`\<[`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)\>

  ↳ **`QCParamsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](QCParamsServiceUpdateRequest.md#constructor)

### Properties

- [code](QCParamsServiceUpdateRequest.md#code)
- [description](QCParamsServiceUpdateRequest.md#description)
- [id](QCParamsServiceUpdateRequest.md#id)
- [name](QCParamsServiceUpdateRequest.md#name)
- [notifyUsers](QCParamsServiceUpdateRequest.md#notifyusers)
- [userComment](QCParamsServiceUpdateRequest.md#usercomment)
- [fields](QCParamsServiceUpdateRequest.md#fields)
- [runtime](QCParamsServiceUpdateRequest.md#runtime)
- [typeName](QCParamsServiceUpdateRequest.md#typename)

### Methods

- [clone](QCParamsServiceUpdateRequest.md#clone)
- [equals](QCParamsServiceUpdateRequest.md#equals)
- [fromBinary](QCParamsServiceUpdateRequest.md#frombinary)
- [fromJson](QCParamsServiceUpdateRequest.md#fromjson)
- [fromJsonString](QCParamsServiceUpdateRequest.md#fromjsonstring)
- [getType](QCParamsServiceUpdateRequest.md#gettype)
- [toBinary](QCParamsServiceUpdateRequest.md#tobinary)
- [toJSON](QCParamsServiceUpdateRequest.md#tojson)
- [toJson](QCParamsServiceUpdateRequest.md#tojson-1)
- [toJsonString](QCParamsServiceUpdateRequest.md#tojsonstring)
- [equals](QCParamsServiceUpdateRequest.md#equals-1)
- [fromBinary](QCParamsServiceUpdateRequest.md#frombinary-1)
- [fromJson](QCParamsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](QCParamsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCParamsServiceUpdateRequest**(`data?`): [`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)\> |

#### Returns

[`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)

#### Overrides

Message\&lt;QCParamsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/qc_params.scailo_pb.ts:257](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_params.scailo_pb.ts#L257)

## Properties

### code

• **code**: `string` = `""`

The qc param code

**`Generated`**

from field: string code = 11;

#### Defined in

[src/qc_params.scailo_pb.ts:248](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_params.scailo_pb.ts#L248)

___

### description

• **description**: `string` = `""`

The description of the qc param

**`Generated`**

from field: string description = 12;

#### Defined in

[src/qc_params.scailo_pb.ts:255](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_params.scailo_pb.ts#L255)

___

### id

• **id**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target record that needs to be updated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/qc_params.scailo_pb.ts:222](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_params.scailo_pb.ts#L222)

___

### name

• **name**: `string` = `""`

The name of the qc param

**`Generated`**

from field: string name = 10;

#### Defined in

[src/qc_params.scailo_pb.ts:241](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_params.scailo_pb.ts#L241)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/qc_params.scailo_pb.ts:234](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_params.scailo_pb.ts#L234)

___

### userComment

• **userComment**: `string` = `""`

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

from field: string user_comment = 1;

#### Defined in

[src/qc_params.scailo_pb.ts:206](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_params.scailo_pb.ts#L206)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_params.scailo_pb.ts:264](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_params.scailo_pb.ts#L264)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_params.scailo_pb.ts:262](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_params.scailo_pb.ts#L262)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCParamsServiceUpdateRequest"``

#### Defined in

[src/qc_params.scailo_pb.ts:263](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_params.scailo_pb.ts#L263)

## Methods

### clone

▸ **clone**(): [`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md) \| `PlainMessage`\<[`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md) \| `PlainMessage`\<[`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md) \| `PlainMessage`\<[`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_params.scailo_pb.ts:285](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_params.scailo_pb.ts#L285)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)

#### Defined in

[src/qc_params.scailo_pb.ts:273](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_params.scailo_pb.ts#L273)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)

#### Defined in

[src/qc_params.scailo_pb.ts:277](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_params.scailo_pb.ts#L277)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCParamsServiceUpdateRequest`](QCParamsServiceUpdateRequest.md)

#### Defined in

[src/qc_params.scailo_pb.ts:281](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/qc_params.scailo_pb.ts#L281)
