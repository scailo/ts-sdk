[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProjectsServiceContactCreateRequest

# Class: ProjectsServiceContactCreateRequest

Request message for creating a new project contact association.
This message encapsulates the necessary identifiers to link an employee to a project,
along with compliance details and audit logs required for record initialization.

**Note:** This serves as the primary entry point for managing project personnel, ensuring
that the relationship between the project and the internal employee is properly audited and validated.

**`Generated`**

from message Scailo.ProjectsServiceContactCreateRequest

## Hierarchy

- `Message`\<[`ProjectsServiceContactCreateRequest`](ProjectsServiceContactCreateRequest.md)\>

  ↳ **`ProjectsServiceContactCreateRequest`**

## Table of contents

### Constructors

- [constructor](ProjectsServiceContactCreateRequest.md#constructor)

### Properties

- [employeeId](ProjectsServiceContactCreateRequest.md#employeeid)
- [projectId](ProjectsServiceContactCreateRequest.md#projectid)
- [userComment](ProjectsServiceContactCreateRequest.md#usercomment)
- [fields](ProjectsServiceContactCreateRequest.md#fields)
- [runtime](ProjectsServiceContactCreateRequest.md#runtime)
- [typeName](ProjectsServiceContactCreateRequest.md#typename)

### Methods

- [clone](ProjectsServiceContactCreateRequest.md#clone)
- [equals](ProjectsServiceContactCreateRequest.md#equals)
- [fromBinary](ProjectsServiceContactCreateRequest.md#frombinary)
- [fromJson](ProjectsServiceContactCreateRequest.md#fromjson)
- [fromJsonString](ProjectsServiceContactCreateRequest.md#fromjsonstring)
- [getType](ProjectsServiceContactCreateRequest.md#gettype)
- [toBinary](ProjectsServiceContactCreateRequest.md#tobinary)
- [toJSON](ProjectsServiceContactCreateRequest.md#tojson)
- [toJson](ProjectsServiceContactCreateRequest.md#tojson-1)
- [toJsonString](ProjectsServiceContactCreateRequest.md#tojsonstring)
- [equals](ProjectsServiceContactCreateRequest.md#equals-1)
- [fromBinary](ProjectsServiceContactCreateRequest.md#frombinary-1)
- [fromJson](ProjectsServiceContactCreateRequest.md#fromjson-1)
- [fromJsonString](ProjectsServiceContactCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProjectsServiceContactCreateRequest**(`data?`): [`ProjectsServiceContactCreateRequest`](ProjectsServiceContactCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProjectsServiceContactCreateRequest`](ProjectsServiceContactCreateRequest.md)\> |

#### Returns

[`ProjectsServiceContactCreateRequest`](ProjectsServiceContactCreateRequest.md)

#### Overrides

Message\&lt;ProjectsServiceContactCreateRequest\&gt;.constructor

#### Defined in

[src/projects.scailo_pb.ts:2021](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L2021)

## Properties

### employeeId

• **employeeId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique identifier of the employee being assigned as the project contact.

**`Example`**

```ts
5678
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 employee_id = 11;

#### Defined in

[src/projects.scailo_pb.ts:2019](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L2019)

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique identifier of the target project to which the contact will be associated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 project_id = 10;

#### Defined in

[src/projects.scailo_pb.ts:2003](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L2003)

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

[src/projects.scailo_pb.ts:1987](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L1987)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/projects.scailo_pb.ts:2028](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L2028)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/projects.scailo_pb.ts:2026](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L2026)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProjectsServiceContactCreateRequest"``

#### Defined in

[src/projects.scailo_pb.ts:2027](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L2027)

## Methods

### clone

▸ **clone**(): [`ProjectsServiceContactCreateRequest`](ProjectsServiceContactCreateRequest.md)

Create a deep copy.

#### Returns

[`ProjectsServiceContactCreateRequest`](ProjectsServiceContactCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProjectsServiceContactCreateRequest`](ProjectsServiceContactCreateRequest.md) \| `PlainMessage`\<[`ProjectsServiceContactCreateRequest`](ProjectsServiceContactCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProjectsServiceContactCreateRequest`](ProjectsServiceContactCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProjectsServiceContactCreateRequest`](ProjectsServiceContactCreateRequest.md)\>

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
| `a` | `undefined` \| [`ProjectsServiceContactCreateRequest`](ProjectsServiceContactCreateRequest.md) \| `PlainMessage`\<[`ProjectsServiceContactCreateRequest`](ProjectsServiceContactCreateRequest.md)\> |
| `b` | `undefined` \| [`ProjectsServiceContactCreateRequest`](ProjectsServiceContactCreateRequest.md) \| `PlainMessage`\<[`ProjectsServiceContactCreateRequest`](ProjectsServiceContactCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/projects.scailo_pb.ts:2046](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L2046)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProjectsServiceContactCreateRequest`](ProjectsServiceContactCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProjectsServiceContactCreateRequest`](ProjectsServiceContactCreateRequest.md)

#### Defined in

[src/projects.scailo_pb.ts:2034](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L2034)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProjectsServiceContactCreateRequest`](ProjectsServiceContactCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProjectsServiceContactCreateRequest`](ProjectsServiceContactCreateRequest.md)

#### Defined in

[src/projects.scailo_pb.ts:2038](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L2038)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProjectsServiceContactCreateRequest`](ProjectsServiceContactCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProjectsServiceContactCreateRequest`](ProjectsServiceContactCreateRequest.md)

#### Defined in

[src/projects.scailo_pb.ts:2042](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/projects.scailo_pb.ts#L2042)
