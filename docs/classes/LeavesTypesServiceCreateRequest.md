[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LeavesTypesServiceCreateRequest

# Class: LeavesTypesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.LeavesTypesServiceCreateRequest

## Hierarchy

- `Message`\<[`LeavesTypesServiceCreateRequest`](LeavesTypesServiceCreateRequest.md)\>

  ↳ **`LeavesTypesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](LeavesTypesServiceCreateRequest.md#constructor)

### Properties

- [code](LeavesTypesServiceCreateRequest.md#code)
- [description](LeavesTypesServiceCreateRequest.md#description)
- [entityUuid](LeavesTypesServiceCreateRequest.md#entityuuid)
- [name](LeavesTypesServiceCreateRequest.md#name)
- [payrollPercentage](LeavesTypesServiceCreateRequest.md#payrollpercentage)
- [userComment](LeavesTypesServiceCreateRequest.md#usercomment)
- [fields](LeavesTypesServiceCreateRequest.md#fields)
- [runtime](LeavesTypesServiceCreateRequest.md#runtime)
- [typeName](LeavesTypesServiceCreateRequest.md#typename)

### Methods

- [clone](LeavesTypesServiceCreateRequest.md#clone)
- [equals](LeavesTypesServiceCreateRequest.md#equals)
- [fromBinary](LeavesTypesServiceCreateRequest.md#frombinary)
- [fromJson](LeavesTypesServiceCreateRequest.md#fromjson)
- [fromJsonString](LeavesTypesServiceCreateRequest.md#fromjsonstring)
- [getType](LeavesTypesServiceCreateRequest.md#gettype)
- [toBinary](LeavesTypesServiceCreateRequest.md#tobinary)
- [toJSON](LeavesTypesServiceCreateRequest.md#tojson)
- [toJson](LeavesTypesServiceCreateRequest.md#tojson-1)
- [toJsonString](LeavesTypesServiceCreateRequest.md#tojsonstring)
- [equals](LeavesTypesServiceCreateRequest.md#equals-1)
- [fromBinary](LeavesTypesServiceCreateRequest.md#frombinary-1)
- [fromJson](LeavesTypesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](LeavesTypesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesTypesServiceCreateRequest**(`data?`): [`LeavesTypesServiceCreateRequest`](LeavesTypesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeavesTypesServiceCreateRequest`](LeavesTypesServiceCreateRequest.md)\> |

#### Returns

[`LeavesTypesServiceCreateRequest`](LeavesTypesServiceCreateRequest.md)

#### Overrides

Message\&lt;LeavesTypesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/leaves_types.scailo_pb.ts:151](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_types.scailo_pb.ts#L151)

## Properties

### code

• **code**: `string` = `""`

The leave type code

**`Generated`**

from field: string code = 11;

#### Defined in

[src/leaves_types.scailo_pb.ts:135](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_types.scailo_pb.ts#L135)

___

### description

• **description**: `string` = `""`

The description of the leave type

**`Generated`**

from field: string description = 12;

#### Defined in

[src/leaves_types.scailo_pb.ts:142](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_types.scailo_pb.ts#L142)

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

[src/leaves_types.scailo_pb.ts:114](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_types.scailo_pb.ts#L114)

___

### name

• **name**: `string` = `""`

The name of the leave type

**`Generated`**

from field: string name = 10;

#### Defined in

[src/leaves_types.scailo_pb.ts:128](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_types.scailo_pb.ts#L128)

___

### payrollPercentage

• **payrollPercentage**: `bigint` = `protoInt64.zero`

The percentage of the applicable payroll on use of this leave type (in cents)

**`Generated`**

from field: uint64 payroll_percentage = 13;

#### Defined in

[src/leaves_types.scailo_pb.ts:149](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_types.scailo_pb.ts#L149)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/leaves_types.scailo_pb.ts:121](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_types.scailo_pb.ts#L121)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_types.scailo_pb.ts:158](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_types.scailo_pb.ts#L158)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_types.scailo_pb.ts:156](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_types.scailo_pb.ts#L156)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeavesTypesServiceCreateRequest"``

#### Defined in

[src/leaves_types.scailo_pb.ts:157](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_types.scailo_pb.ts#L157)

## Methods

### clone

▸ **clone**(): [`LeavesTypesServiceCreateRequest`](LeavesTypesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`LeavesTypesServiceCreateRequest`](LeavesTypesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesTypesServiceCreateRequest`](LeavesTypesServiceCreateRequest.md) \| `PlainMessage`\<[`LeavesTypesServiceCreateRequest`](LeavesTypesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeavesTypesServiceCreateRequest`](LeavesTypesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeavesTypesServiceCreateRequest`](LeavesTypesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`LeavesTypesServiceCreateRequest`](LeavesTypesServiceCreateRequest.md) \| `PlainMessage`\<[`LeavesTypesServiceCreateRequest`](LeavesTypesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`LeavesTypesServiceCreateRequest`](LeavesTypesServiceCreateRequest.md) \| `PlainMessage`\<[`LeavesTypesServiceCreateRequest`](LeavesTypesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_types.scailo_pb.ts:179](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_types.scailo_pb.ts#L179)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesTypesServiceCreateRequest`](LeavesTypesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeavesTypesServiceCreateRequest`](LeavesTypesServiceCreateRequest.md)

#### Defined in

[src/leaves_types.scailo_pb.ts:167](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_types.scailo_pb.ts#L167)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesTypesServiceCreateRequest`](LeavesTypesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesTypesServiceCreateRequest`](LeavesTypesServiceCreateRequest.md)

#### Defined in

[src/leaves_types.scailo_pb.ts:171](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_types.scailo_pb.ts#L171)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesTypesServiceCreateRequest`](LeavesTypesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesTypesServiceCreateRequest`](LeavesTypesServiceCreateRequest.md)

#### Defined in

[src/leaves_types.scailo_pb.ts:175](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/leaves_types.scailo_pb.ts#L175)
