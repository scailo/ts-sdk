[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DepartmentsServiceUpdateRequest

# Class: DepartmentsServiceUpdateRequest

Request message for updating an existing Department record.
Only applicable for records in `DRAFT` or `REVISION` states.
This message allows for modifying the name, code, head user, and description
of an established Department.

**Note:** Only fields provided in the request will typically be updated.
The unique system ID is required to locate the target record.

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

[src/departments.scailo_pb.ts:396](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L396)

## Properties

### code

• `Optional` **code**: `string`

**`Optional`**

**`Description`**

The unique code or internal alphanumeric token used to classify the department for billing or budgeting.

**`Example`**

```ts
"DEPT-ENG-04"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string code = 11;

#### Defined in

[src/departments.scailo_pb.ts:362](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L362)

___

### description

• `Optional` **description**: `string`

**`Optional`**

**`Description`**

Expanded details outlining the core operational responsibilities, functions, or charter of the department.

**`Example`**

```ts
"Responsible for developing core cloud infrastructure and cross-platform software systems."
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string description = 13;

#### Defined in

[src/departments.scailo_pb.ts:394](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L394)

___

### headUserId

• `Optional` **headUserId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the user assigned as the department head.

**`Example`**

```ts
8842
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer greater than zero.

**`Generated`**

from field: optional uint64 head_user_id = 12;

#### Defined in

[src/departments.scailo_pb.ts:378](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L378)

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

[src/departments.scailo_pb.ts:302](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L302)

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The official or friendly name of the department.

**`Example`**

```ts
"Engineering and Architecture"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 10;

#### Defined in

[src/departments.scailo_pb.ts:346](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L346)

___

### notifyUsers

• `Optional` **notifyUsers**: `boolean`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: optional bool notify_users = 3;

#### Defined in

[src/departments.scailo_pb.ts:314](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L314)

___

### userComment

• `Optional` **userComment**: `string`

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

from field: optional string user_comment = 1;

#### Defined in

[src/departments.scailo_pb.ts:286](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L286)

___

### vaultFolderId

• `Optional` **vaultFolderId**: `bigint`

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

from field: optional uint64 vault_folder_id = 9;

#### Defined in

[src/departments.scailo_pb.ts:330](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L330)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/departments.scailo_pb.ts:403](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L403)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/departments.scailo_pb.ts:401](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L401)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DepartmentsServiceUpdateRequest"``

#### Defined in

[src/departments.scailo_pb.ts:402](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L402)

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

[src/departments.scailo_pb.ts:426](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L426)

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

[src/departments.scailo_pb.ts:414](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L414)

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

[src/departments.scailo_pb.ts:418](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L418)

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

[src/departments.scailo_pb.ts:422](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/departments.scailo_pb.ts#L422)
