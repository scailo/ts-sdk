[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiryContact

# Class: SalesEnquiryContact

Represents the finalized state of a Sales Enquiry Contact mapping.
This entity securely binds a designated associate (the client's point of contact)
to the parent enquiry, tracking accountability, approval workflows, and providing
both internal IDs and unpredictable UUIDs for secure downstream referencing.

**`Generated`**

from message Scailo.SalesEnquiryContact

## Hierarchy

- `Message`\<[`SalesEnquiryContact`](SalesEnquiryContact.md)\>

  ↳ **`SalesEnquiryContact`**

## Table of contents

### Constructors

- [constructor](SalesEnquiryContact.md#constructor)

### Properties

- [approvalMetadata](SalesEnquiryContact.md#approvalmetadata)
- [associateId](SalesEnquiryContact.md#associateid)
- [associateUuid](SalesEnquiryContact.md#associateuuid)
- [entityUuid](SalesEnquiryContact.md#entityuuid)
- [metadata](SalesEnquiryContact.md#metadata)
- [needApproval](SalesEnquiryContact.md#needapproval)
- [salesEnquiryId](SalesEnquiryContact.md#salesenquiryid)
- [userComment](SalesEnquiryContact.md#usercomment)
- [fields](SalesEnquiryContact.md#fields)
- [runtime](SalesEnquiryContact.md#runtime)
- [typeName](SalesEnquiryContact.md#typename)

### Methods

- [clone](SalesEnquiryContact.md#clone)
- [equals](SalesEnquiryContact.md#equals)
- [fromBinary](SalesEnquiryContact.md#frombinary)
- [fromJson](SalesEnquiryContact.md#fromjson)
- [fromJsonString](SalesEnquiryContact.md#fromjsonstring)
- [getType](SalesEnquiryContact.md#gettype)
- [toBinary](SalesEnquiryContact.md#tobinary)
- [toJSON](SalesEnquiryContact.md#tojson)
- [toJson](SalesEnquiryContact.md#tojson-1)
- [toJsonString](SalesEnquiryContact.md#tojsonstring)
- [equals](SalesEnquiryContact.md#equals-1)
- [fromBinary](SalesEnquiryContact.md#frombinary-1)
- [fromJson](SalesEnquiryContact.md#fromjson-1)
- [fromJsonString](SalesEnquiryContact.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiryContact**(`data?`): [`SalesEnquiryContact`](SalesEnquiryContact.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesEnquiryContact`](SalesEnquiryContact.md)\> |

#### Returns

[`SalesEnquiryContact`](SalesEnquiryContact.md)

#### Overrides

Message\&lt;SalesEnquiryContact\&gt;.constructor

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3730](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L3730)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3674](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L3674)

___

### associateId

• **associateId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the associate acting as the point of contact.

**`Example`**

```ts
55
```

**`Generated`**

from field: uint64 associate_id = 11;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3716](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L3716)

___

### associateUuid

• **associateUuid**: `string` = `""`

**`Description`**

The globally unique identifier (UUID) of the associate, used for secure external referencing without exposing sequential internal IDs.

**`Example`**

```ts
"661f9511-f39c-42d5-b827-557766551111"
```

**`Format`**

Valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string associate_uuid = 211;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3728](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L3728)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Description`**

The organization's globally unique identifier.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3658](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L3658)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3666](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L3666)

___

### needApproval

• **needApproval**: `boolean` = `false`

**`Description`**

A boolean flag indicating whether this specific record requires further administrative approval.

**`Example`**

```ts
false
```

**`Format`**

Boolean true or false.

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3686](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L3686)

___

### salesEnquiryId

• **salesEnquiryId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the parent sales enquiry to which this contact belongs.

**`Example`**

```ts
1024
```

**`Generated`**

from field: uint64 sales_enquiry_id = 10;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3706](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L3706)

___

### userComment

• **userComment**: `string` = `""`

**`Description`**

Audit log comment or justification captured during the last modification or transactional operation.

**`Example`**

```ts
"Assigned primary warehouse manager as the main contact."
```

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3696](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L3696)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3737](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L3737)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3735](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L3735)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesEnquiryContact"``

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3736](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L3736)

## Methods

### clone

▸ **clone**(): [`SalesEnquiryContact`](SalesEnquiryContact.md)

Create a deep copy.

#### Returns

[`SalesEnquiryContact`](SalesEnquiryContact.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiryContact`](SalesEnquiryContact.md) \| `PlainMessage`\<[`SalesEnquiryContact`](SalesEnquiryContact.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesEnquiryContact`](SalesEnquiryContact.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesEnquiryContact`](SalesEnquiryContact.md)\>

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
| `a` | `undefined` \| [`SalesEnquiryContact`](SalesEnquiryContact.md) \| `PlainMessage`\<[`SalesEnquiryContact`](SalesEnquiryContact.md)\> |
| `b` | `undefined` \| [`SalesEnquiryContact`](SalesEnquiryContact.md) \| `PlainMessage`\<[`SalesEnquiryContact`](SalesEnquiryContact.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3760](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L3760)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiryContact`](SalesEnquiryContact.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiryContact`](SalesEnquiryContact.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3748](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L3748)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiryContact`](SalesEnquiryContact.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiryContact`](SalesEnquiryContact.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3752](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L3752)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiryContact`](SalesEnquiryContact.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiryContact`](SalesEnquiryContact.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3756](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_enquiries.scailo_pb.ts#L3756)
