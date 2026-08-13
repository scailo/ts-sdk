[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LeavesTypesServiceUpdateRequest

# Class: LeavesTypesServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.LeavesTypesServiceUpdateRequest

## Hierarchy

- `Message`\<[`LeavesTypesServiceUpdateRequest`](LeavesTypesServiceUpdateRequest.md)\>

  ↳ **`LeavesTypesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](LeavesTypesServiceUpdateRequest.md#constructor)

### Properties

- [code](LeavesTypesServiceUpdateRequest.md#code)
- [description](LeavesTypesServiceUpdateRequest.md#description)
- [id](LeavesTypesServiceUpdateRequest.md#id)
- [name](LeavesTypesServiceUpdateRequest.md#name)
- [notifyUsers](LeavesTypesServiceUpdateRequest.md#notifyusers)
- [payrollPercentage](LeavesTypesServiceUpdateRequest.md#payrollpercentage)
- [userComment](LeavesTypesServiceUpdateRequest.md#usercomment)
- [fields](LeavesTypesServiceUpdateRequest.md#fields)
- [runtime](LeavesTypesServiceUpdateRequest.md#runtime)
- [typeName](LeavesTypesServiceUpdateRequest.md#typename)

### Methods

- [clone](LeavesTypesServiceUpdateRequest.md#clone)
- [equals](LeavesTypesServiceUpdateRequest.md#equals)
- [fromBinary](LeavesTypesServiceUpdateRequest.md#frombinary)
- [fromJson](LeavesTypesServiceUpdateRequest.md#fromjson)
- [fromJsonString](LeavesTypesServiceUpdateRequest.md#fromjsonstring)
- [getType](LeavesTypesServiceUpdateRequest.md#gettype)
- [toBinary](LeavesTypesServiceUpdateRequest.md#tobinary)
- [toJSON](LeavesTypesServiceUpdateRequest.md#tojson)
- [toJson](LeavesTypesServiceUpdateRequest.md#tojson-1)
- [toJsonString](LeavesTypesServiceUpdateRequest.md#tojsonstring)
- [equals](LeavesTypesServiceUpdateRequest.md#equals-1)
- [fromBinary](LeavesTypesServiceUpdateRequest.md#frombinary-1)
- [fromJson](LeavesTypesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](LeavesTypesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesTypesServiceUpdateRequest**(`data?`): [`LeavesTypesServiceUpdateRequest`](LeavesTypesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeavesTypesServiceUpdateRequest`](LeavesTypesServiceUpdateRequest.md)\> |

#### Returns

[`LeavesTypesServiceUpdateRequest`](LeavesTypesServiceUpdateRequest.md)

#### Overrides

Message\&lt;LeavesTypesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/leaves_types.scailo_pb.ts:272](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/leaves_types.scailo_pb.ts#L272)

## Properties

### code

• **code**: `string` = `""`

The leave type code

**`Generated`**

from field: string code = 11;

#### Defined in

[src/leaves_types.scailo_pb.ts:256](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/leaves_types.scailo_pb.ts#L256)

___

### description

• **description**: `string` = `""`

The description of the leave type

**`Generated`**

from field: string description = 12;

#### Defined in

[src/leaves_types.scailo_pb.ts:263](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/leaves_types.scailo_pb.ts#L263)

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

[src/leaves_types.scailo_pb.ts:230](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/leaves_types.scailo_pb.ts#L230)

___

### name

• **name**: `string` = `""`

The name of the leave type

**`Generated`**

from field: string name = 10;

#### Defined in

[src/leaves_types.scailo_pb.ts:249](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/leaves_types.scailo_pb.ts#L249)

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

[src/leaves_types.scailo_pb.ts:242](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/leaves_types.scailo_pb.ts#L242)

___

### payrollPercentage

• **payrollPercentage**: `bigint` = `protoInt64.zero`

The percentage of the applicable payroll on use of this leave type (in cents)

**`Generated`**

from field: uint64 payroll_percentage = 13;

#### Defined in

[src/leaves_types.scailo_pb.ts:270](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/leaves_types.scailo_pb.ts#L270)

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

[src/leaves_types.scailo_pb.ts:214](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/leaves_types.scailo_pb.ts#L214)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_types.scailo_pb.ts:279](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/leaves_types.scailo_pb.ts#L279)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_types.scailo_pb.ts:277](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/leaves_types.scailo_pb.ts#L277)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeavesTypesServiceUpdateRequest"``

#### Defined in

[src/leaves_types.scailo_pb.ts:278](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/leaves_types.scailo_pb.ts#L278)

## Methods

### clone

▸ **clone**(): [`LeavesTypesServiceUpdateRequest`](LeavesTypesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`LeavesTypesServiceUpdateRequest`](LeavesTypesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesTypesServiceUpdateRequest`](LeavesTypesServiceUpdateRequest.md) \| `PlainMessage`\<[`LeavesTypesServiceUpdateRequest`](LeavesTypesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeavesTypesServiceUpdateRequest`](LeavesTypesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeavesTypesServiceUpdateRequest`](LeavesTypesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`LeavesTypesServiceUpdateRequest`](LeavesTypesServiceUpdateRequest.md) \| `PlainMessage`\<[`LeavesTypesServiceUpdateRequest`](LeavesTypesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`LeavesTypesServiceUpdateRequest`](LeavesTypesServiceUpdateRequest.md) \| `PlainMessage`\<[`LeavesTypesServiceUpdateRequest`](LeavesTypesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_types.scailo_pb.ts:301](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/leaves_types.scailo_pb.ts#L301)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesTypesServiceUpdateRequest`](LeavesTypesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeavesTypesServiceUpdateRequest`](LeavesTypesServiceUpdateRequest.md)

#### Defined in

[src/leaves_types.scailo_pb.ts:289](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/leaves_types.scailo_pb.ts#L289)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesTypesServiceUpdateRequest`](LeavesTypesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesTypesServiceUpdateRequest`](LeavesTypesServiceUpdateRequest.md)

#### Defined in

[src/leaves_types.scailo_pb.ts:293](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/leaves_types.scailo_pb.ts#L293)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesTypesServiceUpdateRequest`](LeavesTypesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesTypesServiceUpdateRequest`](LeavesTypesServiceUpdateRequest.md)

#### Defined in

[src/leaves_types.scailo_pb.ts:297](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/leaves_types.scailo_pb.ts#L297)
