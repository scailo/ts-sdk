[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PayrollParamsServiceCreateRequest

# Class: PayrollParamsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.PayrollParamsServiceCreateRequest

## Hierarchy

- `Message`\<[`PayrollParamsServiceCreateRequest`](PayrollParamsServiceCreateRequest.md)\>

  ↳ **`PayrollParamsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](PayrollParamsServiceCreateRequest.md#constructor)

### Properties

- [code](PayrollParamsServiceCreateRequest.md#code)
- [description](PayrollParamsServiceCreateRequest.md#description)
- [entityUuid](PayrollParamsServiceCreateRequest.md#entityuuid)
- [name](PayrollParamsServiceCreateRequest.md#name)
- [userComment](PayrollParamsServiceCreateRequest.md#usercomment)
- [fields](PayrollParamsServiceCreateRequest.md#fields)
- [runtime](PayrollParamsServiceCreateRequest.md#runtime)
- [typeName](PayrollParamsServiceCreateRequest.md#typename)

### Methods

- [clone](PayrollParamsServiceCreateRequest.md#clone)
- [equals](PayrollParamsServiceCreateRequest.md#equals)
- [fromBinary](PayrollParamsServiceCreateRequest.md#frombinary)
- [fromJson](PayrollParamsServiceCreateRequest.md#fromjson)
- [fromJsonString](PayrollParamsServiceCreateRequest.md#fromjsonstring)
- [getType](PayrollParamsServiceCreateRequest.md#gettype)
- [toBinary](PayrollParamsServiceCreateRequest.md#tobinary)
- [toJSON](PayrollParamsServiceCreateRequest.md#tojson)
- [toJson](PayrollParamsServiceCreateRequest.md#tojson-1)
- [toJsonString](PayrollParamsServiceCreateRequest.md#tojsonstring)
- [equals](PayrollParamsServiceCreateRequest.md#equals-1)
- [fromBinary](PayrollParamsServiceCreateRequest.md#frombinary-1)
- [fromJson](PayrollParamsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](PayrollParamsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PayrollParamsServiceCreateRequest**(`data?`): [`PayrollParamsServiceCreateRequest`](PayrollParamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PayrollParamsServiceCreateRequest`](PayrollParamsServiceCreateRequest.md)\> |

#### Returns

[`PayrollParamsServiceCreateRequest`](PayrollParamsServiceCreateRequest.md)

#### Overrides

Message\&lt;PayrollParamsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/payroll_params.scailo_pb.ts:144](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/payroll_params.scailo_pb.ts#L144)

## Properties

### code

• **code**: `string` = `""`

The payroll param code

**`Generated`**

from field: string code = 11;

#### Defined in

[src/payroll_params.scailo_pb.ts:135](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/payroll_params.scailo_pb.ts#L135)

___

### description

• **description**: `string` = `""`

The description of the payroll param

**`Generated`**

from field: string description = 12;

#### Defined in

[src/payroll_params.scailo_pb.ts:142](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/payroll_params.scailo_pb.ts#L142)

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

[src/payroll_params.scailo_pb.ts:114](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/payroll_params.scailo_pb.ts#L114)

___

### name

• **name**: `string` = `""`

The name of the payroll param

**`Generated`**

from field: string name = 10;

#### Defined in

[src/payroll_params.scailo_pb.ts:128](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/payroll_params.scailo_pb.ts#L128)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/payroll_params.scailo_pb.ts:121](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/payroll_params.scailo_pb.ts#L121)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/payroll_params.scailo_pb.ts:151](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/payroll_params.scailo_pb.ts#L151)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/payroll_params.scailo_pb.ts:149](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/payroll_params.scailo_pb.ts#L149)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PayrollParamsServiceCreateRequest"``

#### Defined in

[src/payroll_params.scailo_pb.ts:150](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/payroll_params.scailo_pb.ts#L150)

## Methods

### clone

▸ **clone**(): [`PayrollParamsServiceCreateRequest`](PayrollParamsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`PayrollParamsServiceCreateRequest`](PayrollParamsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PayrollParamsServiceCreateRequest`](PayrollParamsServiceCreateRequest.md) \| `PlainMessage`\<[`PayrollParamsServiceCreateRequest`](PayrollParamsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PayrollParamsServiceCreateRequest`](PayrollParamsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PayrollParamsServiceCreateRequest`](PayrollParamsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`PayrollParamsServiceCreateRequest`](PayrollParamsServiceCreateRequest.md) \| `PlainMessage`\<[`PayrollParamsServiceCreateRequest`](PayrollParamsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`PayrollParamsServiceCreateRequest`](PayrollParamsServiceCreateRequest.md) \| `PlainMessage`\<[`PayrollParamsServiceCreateRequest`](PayrollParamsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/payroll_params.scailo_pb.ts:171](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/payroll_params.scailo_pb.ts#L171)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PayrollParamsServiceCreateRequest`](PayrollParamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PayrollParamsServiceCreateRequest`](PayrollParamsServiceCreateRequest.md)

#### Defined in

[src/payroll_params.scailo_pb.ts:159](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/payroll_params.scailo_pb.ts#L159)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PayrollParamsServiceCreateRequest`](PayrollParamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollParamsServiceCreateRequest`](PayrollParamsServiceCreateRequest.md)

#### Defined in

[src/payroll_params.scailo_pb.ts:163](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/payroll_params.scailo_pb.ts#L163)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PayrollParamsServiceCreateRequest`](PayrollParamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollParamsServiceCreateRequest`](PayrollParamsServiceCreateRequest.md)

#### Defined in

[src/payroll_params.scailo_pb.ts:167](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/payroll_params.scailo_pb.ts#L167)
