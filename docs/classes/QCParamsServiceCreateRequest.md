[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCParamsServiceCreateRequest

# Class: QCParamsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.QCParamsServiceCreateRequest

## Hierarchy

- `Message`\<[`QCParamsServiceCreateRequest`](QCParamsServiceCreateRequest.md)\>

  ↳ **`QCParamsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](QCParamsServiceCreateRequest.md#constructor)

### Properties

- [code](QCParamsServiceCreateRequest.md#code)
- [description](QCParamsServiceCreateRequest.md#description)
- [entityUuid](QCParamsServiceCreateRequest.md#entityuuid)
- [name](QCParamsServiceCreateRequest.md#name)
- [userComment](QCParamsServiceCreateRequest.md#usercomment)
- [fields](QCParamsServiceCreateRequest.md#fields)
- [runtime](QCParamsServiceCreateRequest.md#runtime)
- [typeName](QCParamsServiceCreateRequest.md#typename)

### Methods

- [clone](QCParamsServiceCreateRequest.md#clone)
- [equals](QCParamsServiceCreateRequest.md#equals)
- [fromBinary](QCParamsServiceCreateRequest.md#frombinary)
- [fromJson](QCParamsServiceCreateRequest.md#fromjson)
- [fromJsonString](QCParamsServiceCreateRequest.md#fromjsonstring)
- [getType](QCParamsServiceCreateRequest.md#gettype)
- [toBinary](QCParamsServiceCreateRequest.md#tobinary)
- [toJSON](QCParamsServiceCreateRequest.md#tojson)
- [toJson](QCParamsServiceCreateRequest.md#tojson-1)
- [toJsonString](QCParamsServiceCreateRequest.md#tojsonstring)
- [equals](QCParamsServiceCreateRequest.md#equals-1)
- [fromBinary](QCParamsServiceCreateRequest.md#frombinary-1)
- [fromJson](QCParamsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](QCParamsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCParamsServiceCreateRequest**(`data?`): [`QCParamsServiceCreateRequest`](QCParamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCParamsServiceCreateRequest`](QCParamsServiceCreateRequest.md)\> |

#### Returns

[`QCParamsServiceCreateRequest`](QCParamsServiceCreateRequest.md)

#### Overrides

Message\&lt;QCParamsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/qc_params.scailo_pb.ts:153](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/qc_params.scailo_pb.ts#L153)

## Properties

### code

• **code**: `string` = `""`

The qc param code

**`Generated`**

from field: string code = 11;

#### Defined in

[src/qc_params.scailo_pb.ts:144](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/qc_params.scailo_pb.ts#L144)

___

### description

• **description**: `string` = `""`

The description of the qc param

**`Generated`**

from field: string description = 12;

#### Defined in

[src/qc_params.scailo_pb.ts:151](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/qc_params.scailo_pb.ts#L151)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

The globally unique identifier for the Organization or Business Entity.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/qc_params.scailo_pb.ts:114](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/qc_params.scailo_pb.ts#L114)

___

### name

• **name**: `string` = `""`

The name of the qc param

**`Generated`**

from field: string name = 10;

#### Defined in

[src/qc_params.scailo_pb.ts:137](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/qc_params.scailo_pb.ts#L137)

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

from field: string user_comment = 2;

#### Defined in

[src/qc_params.scailo_pb.ts:130](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/qc_params.scailo_pb.ts#L130)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_params.scailo_pb.ts:160](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/qc_params.scailo_pb.ts#L160)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_params.scailo_pb.ts:158](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/qc_params.scailo_pb.ts#L158)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCParamsServiceCreateRequest"``

#### Defined in

[src/qc_params.scailo_pb.ts:159](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/qc_params.scailo_pb.ts#L159)

## Methods

### clone

▸ **clone**(): [`QCParamsServiceCreateRequest`](QCParamsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`QCParamsServiceCreateRequest`](QCParamsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QCParamsServiceCreateRequest`](QCParamsServiceCreateRequest.md) \| `PlainMessage`\<[`QCParamsServiceCreateRequest`](QCParamsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCParamsServiceCreateRequest`](QCParamsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCParamsServiceCreateRequest`](QCParamsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`QCParamsServiceCreateRequest`](QCParamsServiceCreateRequest.md) \| `PlainMessage`\<[`QCParamsServiceCreateRequest`](QCParamsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`QCParamsServiceCreateRequest`](QCParamsServiceCreateRequest.md) \| `PlainMessage`\<[`QCParamsServiceCreateRequest`](QCParamsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_params.scailo_pb.ts:180](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/qc_params.scailo_pb.ts#L180)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCParamsServiceCreateRequest`](QCParamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCParamsServiceCreateRequest`](QCParamsServiceCreateRequest.md)

#### Defined in

[src/qc_params.scailo_pb.ts:168](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/qc_params.scailo_pb.ts#L168)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCParamsServiceCreateRequest`](QCParamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCParamsServiceCreateRequest`](QCParamsServiceCreateRequest.md)

#### Defined in

[src/qc_params.scailo_pb.ts:172](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/qc_params.scailo_pb.ts#L172)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCParamsServiceCreateRequest`](QCParamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCParamsServiceCreateRequest`](QCParamsServiceCreateRequest.md)

#### Defined in

[src/qc_params.scailo_pb.ts:176](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/qc_params.scailo_pb.ts#L176)
