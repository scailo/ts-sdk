[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiryContact

# Class: SalesEnquiryContact

Describes the parameters that constitute a sales enquiry contact

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

src/sales_enquiries.scailo_pb.ts:2350

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/sales_enquiries.scailo_pb.ts:2320

___

### associateId

• **associateId**: `bigint` = `protoInt64.zero`

Stores the associate ID

**`Generated`**

from field: uint64 associate_id = 11;

#### Defined in

src/sales_enquiries.scailo_pb.ts:2348

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/sales_enquiries.scailo_pb.ts:2306

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this sales enquiry

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/sales_enquiries.scailo_pb.ts:2313

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this record requires approval (or has been approved)

**`Generated`**

from field: bool need_approval = 4;

#### Defined in

src/sales_enquiries.scailo_pb.ts:2327

___

### salesEnquiryId

• **salesEnquiryId**: `bigint` = `protoInt64.zero`

Stores the sales enquiry ID

**`Generated`**

from field: uint64 sales_enquiry_id = 10;

#### Defined in

src/sales_enquiries.scailo_pb.ts:2341

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/sales_enquiries.scailo_pb.ts:2334

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_enquiries.scailo_pb.ts:2357

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_enquiries.scailo_pb.ts:2355

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesEnquiryContact"``

#### Defined in

src/sales_enquiries.scailo_pb.ts:2356

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

src/sales_enquiries.scailo_pb.ts:2379

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

src/sales_enquiries.scailo_pb.ts:2367

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

src/sales_enquiries.scailo_pb.ts:2371

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

src/sales_enquiries.scailo_pb.ts:2375
