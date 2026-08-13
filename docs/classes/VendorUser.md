[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorUser

# Class: VendorUser

Represents a full Vendor User association within the system.
This message encapsulates the complete state of a vendor user relationship,
including organization tenancy, core entity identifiers, audit trails, and
granular approval workflow metadata.

**`Generated`**

from message Scailo.VendorUser

## Hierarchy

- `Message`\<[`VendorUser`](VendorUser.md)\>

  ↳ **`VendorUser`**

## Table of contents

### Constructors

- [constructor](VendorUser.md#constructor)

### Properties

- [approvalMetadata](VendorUser.md#approvalmetadata)
- [associateId](VendorUser.md#associateid)
- [entityUuid](VendorUser.md#entityuuid)
- [metadata](VendorUser.md#metadata)
- [needApproval](VendorUser.md#needapproval)
- [userComment](VendorUser.md#usercomment)
- [userId](VendorUser.md#userid)
- [vendorId](VendorUser.md#vendorid)
- [fields](VendorUser.md#fields)
- [runtime](VendorUser.md#runtime)
- [typeName](VendorUser.md#typename)

### Methods

- [clone](VendorUser.md#clone)
- [equals](VendorUser.md#equals)
- [fromBinary](VendorUser.md#frombinary)
- [fromJson](VendorUser.md#fromjson)
- [fromJsonString](VendorUser.md#fromjsonstring)
- [getType](VendorUser.md#gettype)
- [toBinary](VendorUser.md#tobinary)
- [toJSON](VendorUser.md#tojson)
- [toJson](VendorUser.md#tojson-1)
- [toJsonString](VendorUser.md#tojsonstring)
- [equals](VendorUser.md#equals-1)
- [fromBinary](VendorUser.md#frombinary-1)
- [fromJson](VendorUser.md#fromjson-1)
- [fromJsonString](VendorUser.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorUser**(`data?`): [`VendorUser`](VendorUser.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorUser`](VendorUser.md)\> |

#### Returns

[`VendorUser`](VendorUser.md)

#### Overrides

Message\&lt;VendorUser\&gt;.constructor

#### Defined in

[src/vendors.scailo_pb.ts:3466](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L3466)

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

**`Description`**

Detailed approval workflow state (Approver ID, Role, and Timestamps).

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

[src/vendors.scailo_pb.ts:3412](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L3412)

___

### associateId

• **associateId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the optional associated secondary entity or associate party.

**`Example`**

```ts
9012
```

**`Generated`**

from field: uint64 associate_id = 12;

#### Defined in

[src/vendors.scailo_pb.ts:3464](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L3464)

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

[src/vendors.scailo_pb.ts:3396](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L3396)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/vendors.scailo_pb.ts:3404](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L3404)

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

[src/vendors.scailo_pb.ts:3424](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L3424)

___

### userComment

• **userComment**: `string` = `""`

**`Description`**

Audit log comment or justification captured during the last modification or transactional operation.

**`Example`**

```ts
"Updated user relationship per customer contract renewal."
```

**`Generated`**

from field: string user_comment = 5;

#### Defined in

[src/vendors.scailo_pb.ts:3434](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L3434)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the associated user.

**`Example`**

```ts
5678
```

**`Generated`**

from field: uint64 user_id = 11;

#### Defined in

[src/vendors.scailo_pb.ts:3454](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L3454)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

**`Description`**

The unique internal identifier of the associated vendor.

**`Example`**

```ts
1024
```

**`Generated`**

from field: uint64 vendor_id = 10;

#### Defined in

[src/vendors.scailo_pb.ts:3444](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L3444)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendors.scailo_pb.ts:3473](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L3473)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendors.scailo_pb.ts:3471](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L3471)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorUser"``

#### Defined in

[src/vendors.scailo_pb.ts:3472](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L3472)

## Methods

### clone

▸ **clone**(): [`VendorUser`](VendorUser.md)

Create a deep copy.

#### Returns

[`VendorUser`](VendorUser.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorUser`](VendorUser.md) \| `PlainMessage`\<[`VendorUser`](VendorUser.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorUser`](VendorUser.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorUser`](VendorUser.md)\>

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
| `a` | `undefined` \| [`VendorUser`](VendorUser.md) \| `PlainMessage`\<[`VendorUser`](VendorUser.md)\> |
| `b` | `undefined` \| [`VendorUser`](VendorUser.md) \| `PlainMessage`\<[`VendorUser`](VendorUser.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendors.scailo_pb.ts:3496](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L3496)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorUser`](VendorUser.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorUser`](VendorUser.md)

#### Defined in

[src/vendors.scailo_pb.ts:3484](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L3484)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorUser`](VendorUser.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorUser`](VendorUser.md)

#### Defined in

[src/vendors.scailo_pb.ts:3488](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L3488)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorUser`](VendorUser.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorUser`](VendorUser.md)

#### Defined in

[src/vendors.scailo_pb.ts:3492](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L3492)
