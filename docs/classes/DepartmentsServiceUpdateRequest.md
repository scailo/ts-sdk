[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DepartmentsServiceUpdateRequest

# Class: DepartmentsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.DepartmentsServiceUpdateRequest

## Hierarchy

- `Message`\<[`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)\>

  ↳ **`DepartmentsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](DepartmentsServiceUpdateRequest.md#constructor)

### Properties

- [code](DepartmentsServiceUpdateRequest.md#code)
- [description](DepartmentsServiceUpdateRequest.md#description)
- [headUserId](DepartmentsServiceUpdateRequest.md#headuserid)
- [id](DepartmentsServiceUpdateRequest.md#id)
- [name](DepartmentsServiceUpdateRequest.md#name)
- [notifyUsers](DepartmentsServiceUpdateRequest.md#notifyusers)
- [userComment](DepartmentsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](DepartmentsServiceUpdateRequest.md#vaultfolderid)
- [fields](DepartmentsServiceUpdateRequest.md#fields)
- [runtime](DepartmentsServiceUpdateRequest.md#runtime)
- [typeName](DepartmentsServiceUpdateRequest.md#typename)

### Methods

- [clone](DepartmentsServiceUpdateRequest.md#clone)
- [equals](DepartmentsServiceUpdateRequest.md#equals)
- [fromBinary](DepartmentsServiceUpdateRequest.md#frombinary)
- [fromJson](DepartmentsServiceUpdateRequest.md#fromjson)
- [fromJsonString](DepartmentsServiceUpdateRequest.md#fromjsonstring)
- [getType](DepartmentsServiceUpdateRequest.md#gettype)
- [toBinary](DepartmentsServiceUpdateRequest.md#tobinary)
- [toJSON](DepartmentsServiceUpdateRequest.md#tojson)
- [toJson](DepartmentsServiceUpdateRequest.md#tojson-1)
- [toJsonString](DepartmentsServiceUpdateRequest.md#tojsonstring)
- [equals](DepartmentsServiceUpdateRequest.md#equals-1)
- [fromBinary](DepartmentsServiceUpdateRequest.md#frombinary-1)
- [fromJson](DepartmentsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](DepartmentsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new DepartmentsServiceUpdateRequest**(`data?`): [`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)\> |

#### Returns

[`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)

#### Overrides

Message\&lt;DepartmentsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/departments.scailo_pb.ts:286](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L286)

## Properties

### code

• **code**: `string` = `""`

The code of the department

**`Generated`**

from field: string code = 11;

#### Defined in

[src/departments.scailo_pb.ts:270](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L270)

___

### description

• **description**: `string` = `""`

The description of the department

**`Generated`**

from field: string description = 13;

#### Defined in

[src/departments.scailo_pb.ts:284](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L284)

___

### headUserId

• **headUserId**: `bigint` = `protoInt64.zero`

The ID of the user who is the department head of this department

**`Generated`**

from field: uint64 head_user_id = 12;

#### Defined in

[src/departments.scailo_pb.ts:277](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L277)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/departments.scailo_pb.ts:228](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L228)

___

### name

• **name**: `string` = `""`

The name of the department

**`Generated`**

from field: string name = 10;

#### Defined in

[src/departments.scailo_pb.ts:263](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L263)

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

[src/departments.scailo_pb.ts:240](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L240)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/departments.scailo_pb.ts:221](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L221)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Updated vault folder ID for documentation storage.

**`Example`**

```ts
15235
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/departments.scailo_pb.ts:256](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L256)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/departments.scailo_pb.ts:293](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L293)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/departments.scailo_pb.ts:291](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L291)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DepartmentsServiceUpdateRequest"``

#### Defined in

[src/departments.scailo_pb.ts:292](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L292)

## Methods

### clone

▸ **clone**(): [`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md) \| `PlainMessage`\<[`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md) \| `PlainMessage`\<[`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md) \| `PlainMessage`\<[`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/departments.scailo_pb.ts:316](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L316)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)

#### Defined in

[src/departments.scailo_pb.ts:304](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L304)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)

#### Defined in

[src/departments.scailo_pb.ts:308](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L308)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DepartmentsServiceUpdateRequest`](DepartmentsServiceUpdateRequest.md)

#### Defined in

[src/departments.scailo_pb.ts:312](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/departments.scailo_pb.ts#L312)
