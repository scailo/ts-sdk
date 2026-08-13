[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AssociatesServiceCountReq

# Class: AssociatesServiceCountReq

Target filter request for counting associate records matching specific logical criteria.
This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
and entity references to determine the total size of a targeted dataset.

**Note:** This is the primary message layout used by backend calculation engines, reporting
services, and frontend pagination headers to evaluate total record matches dynamically
before or alongside retrieving paginated results.

**`Generated`**

from message Scailo.AssociatesServiceCountReq

## Hierarchy

- `Message`\<[`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)\>

  ↳ **`AssociatesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](AssociatesServiceCountReq.md#constructor)

### Properties

- [clientId](AssociatesServiceCountReq.md#clientid)
- [creationTimestampEnd](AssociatesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](AssociatesServiceCountReq.md#creationtimestampstart)
- [department](AssociatesServiceCountReq.md#department)
- [entityUuid](AssociatesServiceCountReq.md#entityuuid)
- [firstName](AssociatesServiceCountReq.md#firstname)
- [isActive](AssociatesServiceCountReq.md#isactive)
- [jobTitle](AssociatesServiceCountReq.md#jobtitle)
- [lastName](AssociatesServiceCountReq.md#lastname)
- [middleName](AssociatesServiceCountReq.md#middlename)
- [modificationTimestampEnd](AssociatesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](AssociatesServiceCountReq.md#modificationtimestampstart)
- [orgName](AssociatesServiceCountReq.md#orgname)
- [orgRefFrom](AssociatesServiceCountReq.md#orgreffrom)
- [orgRefId](AssociatesServiceCountReq.md#orgrefid)
- [personalEmail](AssociatesServiceCountReq.md#personalemail)
- [personalPhone](AssociatesServiceCountReq.md#personalphone)
- [vendorId](AssociatesServiceCountReq.md#vendorid)
- [workEmail](AssociatesServiceCountReq.md#workemail)
- [workPhone](AssociatesServiceCountReq.md#workphone)
- [fields](AssociatesServiceCountReq.md#fields)
- [runtime](AssociatesServiceCountReq.md#runtime)
- [typeName](AssociatesServiceCountReq.md#typename)

### Methods

- [clone](AssociatesServiceCountReq.md#clone)
- [equals](AssociatesServiceCountReq.md#equals)
- [fromBinary](AssociatesServiceCountReq.md#frombinary)
- [fromJson](AssociatesServiceCountReq.md#fromjson)
- [fromJsonString](AssociatesServiceCountReq.md#fromjsonstring)
- [getType](AssociatesServiceCountReq.md#gettype)
- [toBinary](AssociatesServiceCountReq.md#tobinary)
- [toJSON](AssociatesServiceCountReq.md#tojson)
- [toJson](AssociatesServiceCountReq.md#tojson-1)
- [toJsonString](AssociatesServiceCountReq.md#tojsonstring)
- [equals](AssociatesServiceCountReq.md#equals-1)
- [fromBinary](AssociatesServiceCountReq.md#frombinary-1)
- [fromJson](AssociatesServiceCountReq.md#fromjson-1)
- [fromJsonString](AssociatesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssociatesServiceCountReq**(`data?`): [`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)\> |

#### Returns

[`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)

#### Overrides

Message\&lt;AssociatesServiceCountReq\&gt;.constructor

#### Defined in

[src/associates.scailo_pb.ts:2098](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L2098)

## Properties

### clientId

• `Optional` **clientId**: `bigint`

**`Optional`**

**`Description`**

Filter results to retrieve only the associates associated with or belonging to a specific Client.

**`Example`**

```ts
9107
```

**`Regex`**

^[0-9]*$

**`Format`**

Non-negative 64-bit integer.

**`Generated`**

from field: optional uint64 client_id = 60;

#### Defined in

[src/associates.scailo_pb.ts:2096](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L2096)

___

### creationTimestampEnd

• `Optional` **creationTimestampEnd**: `bigint`

**`Optional`**

**`Description`**

Filter records created ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 creation_timestamp_end = 102;

#### Defined in

[src/associates.scailo_pb.ts:1824](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1824)

___

### creationTimestampStart

• `Optional` **creationTimestampStart**: `bigint`

**`Optional`**

**`Description`**

Filter records created ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 creation_timestamp_start = 101;

#### Defined in

[src/associates.scailo_pb.ts:1808](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1808)

___

### department

• `Optional` **department**: `string`

**`Optional`**

**`Description`**

The corporate department or division to which the associate is assigned.

**`Example`**

```ts
"Field Operations"
```

**`Regex`**

^[0-9A-Za-z ]*$

**`Format`**

Alphanumeric characters and spaces allowed. Maximum length of 256 characters.

**`Generated`**

from field: optional string department = 17;

#### Defined in

[src/associates.scailo_pb.ts:2000](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L2000)

___

### entityUuid

• `Optional` **entityUuid**: `string`

**`Optional`**

**`Description`**

Filter by the organization UUID.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: optional string entity_uuid = 8;

#### Defined in

[src/associates.scailo_pb.ts:1872](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1872)

___

### firstName

• `Optional` **firstName**: `string`

**`Optional`**

**`Description`**

The legal first name of the associate. Space characters are strictly prohibited.

**`Example`**

```ts
"John"
```

**`Regex`**

^[0-9A-Za-z]+$

**`Format`**

Alphanumeric characters only. Maximum length of 256 characters.

**`Generated`**

from field: optional string first_name = 10;

#### Defined in

[src/associates.scailo_pb.ts:1888](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1888)

___

### isActive

• `Optional` **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/associates.scailo_pb.ts:1792](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1792)

___

### jobTitle

• `Optional` **jobTitle**: `string`

**`Optional`**

**`Description`**

The professional job title held by the associate.

**`Example`**

```ts
"Operations Manager"
```

**`Regex`**

^[0-9A-Za-z ]*$

**`Format`**

Alphanumeric characters and spaces allowed. Maximum length of 256 characters.

**`Generated`**

from field: optional string job_title = 16;

#### Defined in

[src/associates.scailo_pb.ts:1984](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1984)

___

### lastName

• `Optional` **lastName**: `string`

**`Optional`**

**`Description`**

The legal last name of the associate. Space characters are strictly prohibited.

**`Example`**

```ts
"Doe"
```

**`Regex`**

^[0-9A-Za-z]*$

**`Format`**

Alphanumeric characters only. Maximum length of 256 characters.

**`Generated`**

from field: optional string last_name = 12;

#### Defined in

[src/associates.scailo_pb.ts:1920](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1920)

___

### middleName

• `Optional` **middleName**: `string`

**`Optional`**

**`Description`**

The legal middle name of the associate. Space characters are strictly prohibited.

**`Example`**

```ts
"Fitzgerald"
```

**`Regex`**

^[0-9A-Za-z]*$

**`Format`**

Alphanumeric characters only. Maximum length of 256 characters.

**`Generated`**

from field: optional string middle_name = 11;

#### Defined in

[src/associates.scailo_pb.ts:1904](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1904)

___

### modificationTimestampEnd

• `Optional` **modificationTimestampEnd**: `bigint`

**`Optional`**

**`Description`**

Filter records modified ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 modification_timestamp_end = 104;

#### Defined in

[src/associates.scailo_pb.ts:1856](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1856)

___

### modificationTimestampStart

• `Optional` **modificationTimestampStart**: `bigint`

**`Optional`**

**`Description`**

Filter records modified ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 modification_timestamp_start = 103;

#### Defined in

[src/associates.scailo_pb.ts:1840](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1840)

___

### orgName

• `Optional` **orgName**: `string`

**`Optional`**

**`Description`**

The display name of the organization the associate represents.

**`Example`**

```ts
"Acme Inc"
```

**`Note`**

If an explicit `org_ref_id` is supplied, this field will be automatically overwritten and populated by the backend.

**`Regex`**

^[0-9A-Za-z ]*$

**`Format`**

Alphanumeric characters and spaces allowed. Maximum length of 256 characters.

**`Generated`**

from field: optional string org_name = 15;

#### Defined in

[src/associates.scailo_pb.ts:1968](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1968)

___

### orgRefFrom

• `Optional` **orgRefFrom**: [`ASSOCIATE_ORG_REF_FROM`](../enums/ASSOCIATE_ORG_REF_FROM.md)

**`Optional`**

**`Description`**

Identifies the type of external organization mapping (e.g., Client, Vendor, or None).

**`Example`**

```ts
ASSOCIATE_ORG_REF_FROM_EMPTY
```

**`Format`**

Must align with valid states within the ASSOCIATE_ORG_REF_FROM enum definition.

**`Generated`**

from field: optional Scailo.ASSOCIATE_ORG_REF_FROM org_ref_from = 13;

#### Defined in

[src/associates.scailo_pb.ts:1934](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1934)

___

### orgRefId

• `Optional` **orgRefId**: `bigint`

**`Optional`**

**`Description`**

The numeric sequence identifier matching the targeted external Client or Vendor entity.

**`Example`**

```ts
8923
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer. Evaluated and validated in conjunction with the `org_ref_from` selector.

**`Generated`**

from field: optional uint64 org_ref_id = 14;

#### Defined in

[src/associates.scailo_pb.ts:1950](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L1950)

___

### personalEmail

• `Optional` **personalEmail**: `string`

**`Optional`**

**`Description`**

The personal or non-work email address for the associate.

**`Example`**

```ts
"j.doe@personal.com"
```

**`Regex`**

^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

**`Format`**

If provided, must be a valid email address string.

**`Generated`**

from field: optional string personal_email = 21;

#### Defined in

[src/associates.scailo_pb.ts:2064](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L2064)

___

### personalPhone

• `Optional` **personalPhone**: `string`

**`Optional`**

**`Description`**

The personal or secondary mobile phone number for the associate.

**`Example`**

```ts
"+12125550123"
```

**`Regex`**

.+

**`Format`**

Non-empty string; adoption of standard international E.164 formats is highly recommended.

**`Generated`**

from field: optional string personal_phone = 20;

#### Defined in

[src/associates.scailo_pb.ts:2048](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L2048)

___

### vendorId

• `Optional` **vendorId**: `bigint`

**`Optional`**

**`Description`**

Filter results to retrieve only the associates associated with or belonging to a specific Vendor.

**`Example`**

```ts
5402
```

**`Regex`**

^[0-9]*$

**`Format`**

Non-negative 64-bit integer.

**`Generated`**

from field: optional uint64 vendor_id = 50;

#### Defined in

[src/associates.scailo_pb.ts:2080](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L2080)

___

### workEmail

• `Optional` **workEmail**: `string`

**`Optional`**

**`Description`**

The primary business-related email address for the associate.

**`Example`**

```ts
"j.doe@corporate-hub.com"
```

**`Regex`**

^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

**`Format`**

If provided, must be a valid email address string.

**`Generated`**

from field: optional string work_email = 19;

#### Defined in

[src/associates.scailo_pb.ts:2032](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L2032)

___

### workPhone

• `Optional` **workPhone**: `string`

**`Optional`**

**`Description`**

The primary work or corporate telephone number for contacting the associate.

**`Example`**

```ts
"+12125550123"
```

**`Regex`**

.+

**`Format`**

Non-empty string; adoption of standard international E.164 formats is highly recommended.

**`Generated`**

from field: optional string work_phone = 18;

#### Defined in

[src/associates.scailo_pb.ts:2016](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L2016)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/associates.scailo_pb.ts:2105](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L2105)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/associates.scailo_pb.ts:2103](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L2103)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssociatesServiceCountReq"``

#### Defined in

[src/associates.scailo_pb.ts:2104](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L2104)

## Methods

### clone

▸ **clone**(): [`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)

Create a deep copy.

#### Returns

[`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AssociatesServiceCountReq`](AssociatesServiceCountReq.md) \| `PlainMessage`\<[`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`AssociatesServiceCountReq`](AssociatesServiceCountReq.md) \| `PlainMessage`\<[`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)\> |
| `b` | `undefined` \| [`AssociatesServiceCountReq`](AssociatesServiceCountReq.md) \| `PlainMessage`\<[`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/associates.scailo_pb.ts:2140](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L2140)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)

#### Defined in

[src/associates.scailo_pb.ts:2128](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L2128)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)

#### Defined in

[src/associates.scailo_pb.ts:2132](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L2132)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)

#### Defined in

[src/associates.scailo_pb.ts:2136](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L2136)
